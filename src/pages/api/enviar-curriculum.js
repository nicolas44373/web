import formidable from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs';


// Deshabilitar el analizador de cuerpo predeterminado para permitir FormData
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verificar que las variables de entorno existan
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('Las variables de entorno EMAIL_USER o EMAIL_PASSWORD no están configuradas');
    return res.status(500).json({ error: 'Error de configuración del servidor' });
  }

  try {
    // Configurar formidable para parsear la forma
    const form = formidable({
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
    });

    // Parsear la forma
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve([fields, files]);
      });
    });

    // Extraer datos del formulario
    const name = fields.name?.[0] || 'No especificado';
    const email = fields.email?.[0] || 'No especificado';
    const phone = fields.phone?.[0] || 'No especificado';
    const message = fields.message?.[0] || 'No hay mensaje';
    
    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Determinar el destinatario del correo
    const destinatario = process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER;

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: destinatario,
      subject: `Nueva solicitud de empleo de ${name}`,
      html: `
        <h1>Nueva solicitud de empleo</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Adjuntar el CV si existe
    if (files.cv) {
      const cvFile = Array.isArray(files.cv) ? files.cv[0] : files.cv;
      mailOptions.attachments = [
        {
          filename: cvFile.originalFilename,
          path: cvFile.filepath,
        },
      ];
    }

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // Limpiar los archivos temporales si es necesario
    if (files.cv) {
      const cvFile = Array.isArray(files.cv) ? files.cv[0] : files.cv;
      fs.unlink(cvFile.filepath, (err) => {
        if (err) console.error('Error al eliminar archivo temporal:', err);
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al procesar solicitud:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}