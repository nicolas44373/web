import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, telefono, asunto, mensaje } = req.body;

  // Verificar que las variables de entorno existan
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('Las variables de entorno EMAIL_USER o EMAIL_PASSWORD no están configuradas');
    return res.status(500).json({ error: 'Error de configuración del servidor' });
  }

  try {
    // Configura el transporter de nodemailer con variables de entorno
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Determinar el destinatario del correo
    const destinatario = process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER;

    // Enviar el email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: destinatario,
      subject: `Nuevo mensaje de contacto: ${asunto}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}