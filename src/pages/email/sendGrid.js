import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'fcnogueirarp@gmail.com',
      from: 'desenvolvedor.dev.rp@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + ' | Enviado por: ' + req.body.email,
      html: `<div>
      <h3>${req.body.email}</h3>
      <h3>${req.body.message}</h3>

      </div>
      <p>Sent from:${req.body.email}</p>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
