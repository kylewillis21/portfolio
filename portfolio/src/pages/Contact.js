import React, { useState } from'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ContactTab from '../components/ContactTab';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        if(name && email && message) {
            const theName = name;
            const theEmail = email;
            const theMessage = message;
            setErrors({});
            setSubmitted(false);
            // Resets the form after submission
            setName('');
            setEmail('');
            setMessage('');

            await sendEmail(theName, theEmail, theMessage);
            setSuccess(true);
            
        } else {
            const errors = {};
            if (!name) errors.name = 'Name is required.';
            if (!email) errors.email = 'Email is required.';
            if (!message) errors.message = 'Message is required.';
            setErrors(errors);
        }
    }


    return (
        <div className='contactPage'>
            {/* contact information */}
            <div className='contactInfo'>
                <h1 className='contactTitle'>Contact Directly</h1>
                <ContactTab name='kylew920@outlook.com' />
                <ContactTab name='+1 (937) 243-8035' />
                <ContactTab name='Twitter' link='https://twitter.com/KyleWillis21' isLink={true} />
                <ContactTab name='LinkedIn' link='https://www.linkedin.com/in/kyle-willis-21/' isLink={true} />
                <ContactTab name='GitHub' link='https://github.com/kylewillis21' isLink={true} />
            </div>

            {/* The contact me directly section */}
            <div className='contactMe'>
                <div className='contactName'>
                    <Form.Group controlId='contact.name' style={{width: '40%'}}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control style={{backgroundColor: 'lightgray'}} placeholder="Name" value={name} disabled={success} onChange={(e) => setName(e.target.value)} className={submitted && !name ? 'is-invalid' : ''}/>
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </Form.Group>
                
                    <Form.Group controlId='contact.email' style={{width: '40%'}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control style={{backgroundColor: 'lightgray'}} type='email' placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={success} className={submitted && !email ? 'is-invalid' : ''}/>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </Form.Group>
                </div>
                <Form.Group controlId='contact.message'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control style={{backgroundColor: 'lightgray'}} as="textarea" rows={7} placeholder="Message" value={message} disabled={success} onChange={(e) => setMessage(e.target.value)} className={submitted && !message ? 'is-invalid' : ''}/>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </Form.Group>
                <div className='contactSubmit'>
                    {/* TODO set up nodemailer */}
                    <Button variant={success ? 'secondary' : 'primary'} type='submit' onClick={handleSubmit} disabled={success}>
                        {success ? 'Submitted' : 'Submit'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

async function sendEmail(name, email, message) {
    try {
        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();
        console.log(data);
        console.log(data);
    } catch (err) {
        console.error('Error sending email: ', err);
    }
}