const nodemailer = require('nodemailer');

export default async (fields, mandatory, from, to, subject, data, files = []) => {
  //Validate fields
  const errors = mandatory.filter(field => !data[field] || !data[field].trim().length);

  if (errors.length) {
    throw errors;
  } else {
    //Build message
    const message = fields
      .filter(field => data[field] && data[field].trim())
      .reduce((string, field) => `${string}\n${field}: ${data[field]}`, '');

    //Build files
    files = files.map(file => ({
      filename: file.name,
      content: file,
    }));

    //Get transport
    const transporter = mailTransporter();

    //Send mail with defined transport object
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text: message.trim(),
      attachments: files,
    });

    return info;
  }
};

export function mailTransporter() {
  //Build transport
  return nodemailer.createTransport({
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
}
