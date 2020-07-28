import { useState, useRef } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import FundacionSi from './../../components/FundacionSi';
import FormField from '../../components/FormField';
import API from '../../services/API';
import { createRefs, updateValid, triggerValidations } from './../../libs/forms';

export default function Contacto() {
  const required = ['nombre', 'email'];
  const refs = createRefs(required);

  const [fields, setFields] = useState({ nombre: '', email: '', mensaje: '' });
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

      API.post('/contacto', fields)
        .then(result => {
          if (result.ok) {
            Router.push('/contacto/gracias').then(() => window.scrollTo(0, 0));
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
        <title>contacto · involucrarte.</title>
      </Head>

      <form className="form" onSubmit={onSubmit} noValidate={true}>
        <h1 className="block-title">
          Recibimos <strong>tu consulta</strong>
        </h1>

        {error ? <p className="error">{error}</p> : null}

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
            error="El e-mail ingresado es inválido."
            required={required.includes('email')}
            ref={refs.email}
          ></FormField>

          <FormField
            type="textarea"
            placeholder="Escriba su mensaje o consulta aquí..."
            onChange={v => setField('mensaje', v)}
            required={required.includes('mensaje')}
          ></FormField>

          <button type="submit" className="button submit" disabled={!valid || sending}>
            {sending ? <span>Espere...</span> : <span>Enviar</span>}
          </button>
        </div>
      </form>

      <FundacionSi></FundacionSi>
    </div>
  );
}
