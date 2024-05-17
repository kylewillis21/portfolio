const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.unsubscribe(cors());

app.post('/send-email', async(req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({ 
        host: 'smtp.gmail.com', 
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GMAIL_PASS,
         }
    });

    let mailOptions = {
        from: process.env.GMAIL,
        to: process.env.OUTLOOK,
        subject: 'Portfolio Contact',
        html: `
            <h1>Message from ${name}</h1>
            <p>${message}</p>
            <p>Email: ${email}</p>
        `
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Email sent', info});
    } catch(err) { 
        res.status(500).send({ message: 'Error sending email', err });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001')
});