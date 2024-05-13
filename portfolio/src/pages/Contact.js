import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

export default function Contact() {
    return (
        <div className='contactPage'>
            <div className='contactInfo'>
                <h1 className='contactTitle'>Contact Directly</h1>
                <p className='contactItem'>Email: kylew920@outlook.com</p>
            </div>

            {/* The contact me directly section */}
            <div className='contactMe'>
                <div className='contactName'>
                    <Form.Group controlId='contact.name' style={{width: '40%'}}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control style={{backgroundColor: 'lightgray'}} placeholder="Name" />
                    </Form.Group>
                
                    <Form.Group controlId='contact.email' style={{width: '40%'}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control style={{backgroundColor: 'lightgray'}} type='email' placeholder="name@example.com" />
                    </Form.Group>
                </div>
                <Form.Group controlId='contact.message'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control style={{backgroundColor: 'lightgray'}} as="textarea" rows={7} placeholder="Message" />
                </Form.Group>
                <div className='contactSubmit'>
                    {/* TODO set up nodemailer */}
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
 }