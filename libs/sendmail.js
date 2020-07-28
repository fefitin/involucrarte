const nodemailer = require('nodemailer');

export default async (fields, mandatory, from, to, subject, data) => {
  //Validate fields
  const errors = mandatory.filter(field => !data[field] || !data[field].trim().length);

  if (errors.length) {
    throw errors;
  } else {
    //Build message
    const message = fields
      .filter(field => data[field] && data[field].trim())
      .reduce((string, field) => `${string}\n${field}: ${data[field]}`, '');

    //Build transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.GOOGLE_USERNAME,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: process.env.GOOGLE_ACCESS_TOKEN,
      },
    });

    //Send mail with defined transport object
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text: message.trim(),
    });

    return info;
  }
};
