import { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import FundacionSi from './../../components/FundacionSi';
import FormField from '../../components/FormField';
import FileUpload from '../../components/FileUpload';
import API from '../../services/API';
import { createRefs, updateValid, triggerValidations } from './../../libs/forms';

export default function QuieroDonar() {
  const required = ['nombre', 'email', 'obra', 'ficha', 'precio'];
  const refs = createRefs(required);

  const [fields, setFields] = useState({
    nombre: '',
    email: '',
    tel: '',
    obra: '',
    ficha: '',
    precio: '',
    redes: '',
    foto: null,
    autor: null,
  });

  const [valid, setValid] = useState(true);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const setField = (field, value) => {
    setFields(fields => {
      fields[field] = value;
      updateValid(fields, required, setValid);
      return fields;
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    triggerValidations(refs);

    if (updateValid(fields, required, setValid)) {
      setSending(true);

      API.post('/quiero-donar', fields, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then(result => {
          if (result.ok) {
            Router.push('/quiero-donar/gracias').then(() => window.scrollTo(0, 0));
          } else {
            setError('Error al enviar su mensaje. Por favor, intente nuevamente.');
          }
        })
        .catch(() => {
          setError('Error al enviar su mensaje. Por favor, intente nuevamente.');
        })
        .finally(() => {
          setSending(false);
        });
    }
  };

  return (
    <div className="form-container">
      <Head>
        <title>quiero donar · involucrarte.</title>
      </Head>

      <form className="form" onSubmit={onSubmit} noValidate={true}>
        <h1 className="block-title">
          Recibimos <strong>tu donación</strong>
        </h1>

        {error ? <p className="error">{error}</p> : null}

        <div className="intro">
          <p>
            Completá el siguiente formulario para involucr<strong>arte</strong> ofreciendo tu obra.
            <br />
            Podés donar la cantidad de obras que quieras.
          </p>
        </div>

        <div className="fieldset">
          <FormField
            placeholder="Nombre y apellido"
            onChange={v => setField('nombre', v)}
            error="Por favor, ingrese su nombre."
            required={required.includes('nombre')}
            ref={refs.nombre}
          ></FormField>
          <FormField
            type="email"
            placeholder="E-mail"
            onChange={v => setField('email', v)}
            error="Por favor, ingrese su e-mail."
            required={required.includes('email')}
            ref={refs.email}
          ></FormField>
          <FormField
            placeholder="Celular"
            onChange={v => setField('tel', v)}
            error="Por favor, ingrese su celular."
            required={required.includes('tel')}
          ></FormField>
          <FormField
            placeholder="Obra"
            onChange={v => setField('obra', v)}
            error="Por favor, ingrese el nombre de su obra."
            required={required.includes('obra')}
            ref={refs.obra}
          ></FormField>
          <FormField
            placeholder="Ficha técnica"
            onChange={v => setField('ficha', v)}
            error="Ingrese la ficha técnica de su obra."
            required={required.includes('ficha')}
            ref={refs.ficha}
          ></FormField>
          <FormField
            placeholder="Precio"
            onChange={v => setField('precio', v)}
            error="Por favor, ingrese el precio de su obra."
            required={required.includes('precio')}
            ref={refs.precio}
          ></FormField>
          <FormField
            placeholder="Redes"
            onChange={v => setField('redes', v)}
            error="Por favor, ingrese sus redes sociales."
            required={required.includes('redes')}
          ></FormField>
          <div className="field files">
            <FileUpload
              placeholder="Foto de la obra"
              onChange={v => setField('foto', v)}
            ></FileUpload>
            <FileUpload
              placeholder="Foto del autor"
              onChange={v => setField('autor', v)}
            ></FileUpload>
          </div>
          <FormField
            type="textarea"
            placeholder="Escriba su mensaje aquí..."
            onChange={v => setField('mensaje', v)}
            required={required.includes('mensaje')}
          ></FormField>
          <button type="submit" className="button submit" disabled={!valid || sending}>
            {sending ? <span>Espere...</span> : <span>Enviar</span>}
          </button>
        </div>
        <p className="tos">
          Con el envío de este formulario declaro que la foto del arte de referencia es de mi
          propiedad formal e intelectual el que DONO a FundacionSI. A través del presente AUTORIZO
          expresamente al sitio INVOLUCRARTE.COM.AR a publicarla con el objeto de realizar la
          gestión de venta al precio de referencia o mayor. AUTORIZO expresamente a FundacionSI a
          disponer del dinero recibido conforme sus criterio respecto de su objeto caritativo. Una
          vez que me notifiquen al mail de referencia la concreción de la venta me comprometo a
          entregar la obra referida al comprador en mi domicilio conforme sus indicaciones y
          deslindo de todo tipo de responsabilidad a INVOLUCRARTE.COM.AR. Declaro que los datos
          consignados más arriba son de mi propiedad. La presente notificación tiene plena VALIDEZ
          LEGAL a todos sus efectos.
        </p>
      </form>
    </div>
  );
}
