const email = obra => {
  return `
    <h1>Gracias por tu compra</h1>

    <p>Reservaste la obra ${obra.titulo} de ${obra.autor.nombre} ${obra.autor.apellido}.</p>

    <p>Si elegiste pagar con tarjeta de crédito, podés hacerlo en el siguiente link: https://donaronline.org/fundacion-si/hace-posible-los-proyectos-de-fundacion-si</p>

    <p>Si elegiste pagar por transferencia bancaria, podés hacer tu depósito a la siguiente cuenta:</p>
    <ul>
      <li>
        <strong>Nombre de la cuenta:</strong> Fundación Sí Argentina
      </li>
      <li>
        <strong>Banco:</strong> Banco Hipotecario
      </li>
      <li>
        <strong>Alias:</strong> FUNDACION.SI.ARG
      </li>
      <li>
        <strong>Cuenta Corriente en pesos Nro.:</strong> 3-000-0000039073-6
      </li>
      <li>
        <strong>CBU:</strong> 0440000-43000000390736-1
      </li>
      <li>
        <strong>CUIT:</strong> 30-71250682-9
      </li>
    </ul>

    <p>Una vez realizada la compra recibirás un certificado de depósito emitido por FundacionSí. Si no lo recibís o querés realizar cualquier consulta, podés hacerlo a administracion@fundacionsi.org.ar.</p>

    <p>Dentro de las 48 horas de realizado el pago, envía el certificado a involucrarte.dona@gmail.com indicando que compraste la obra #${obra.id}.</p>
  `;
};

export default email;
