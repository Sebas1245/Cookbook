import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const RegistrationLoginForm = ({headerText}) => {
    return (
        <div className="py-5" style={{display: 'flex', alignItems: 'center', height: '100vh'}}>
            <main className="text-center" style={{margin: 'auto', maxWidth: '20%'}}>
                <Image className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" width="72" height="57" />
                <h4>{headerText}</h4>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>    
            </main>
        </div>
    )
}

export default RegistrationLoginForm;