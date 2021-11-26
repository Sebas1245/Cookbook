import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {useNavigate} from 'react-router-dom'
import { login, signup } from '../services/apiCalls';

const RegistrationLoginForm = ({headerText}) => {
    const navigate = useNavigate();
    const isLogin = headerText === "Please login";
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            console.log(username, password, confirmPassword)
            const successfulLogin = await login({username, password});
            if (successfulLogin) {
                navigate('/', {state: 'LoggedIn'});
            }
        } catch (e) {
            console.log(e);
            alert(e);
        }
        
    }
    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            console.log(username, password, confirmPassword)
            const successfullSignup = await signup({username, password, confirmPassword});
            if (successfullSignup) {
                navigate('/', {state: 'LoggedIn'});
            }
        } catch (e) {
            console.log(e);
            alert(e);
        }

    }
    return (
        <div className="py-5" style={{display: 'flex', alignItems: 'center', height: '100vh'}}>
            <main className="text-center" style={{margin: 'auto', maxWidth: '20%'}}>
                <Image className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" width="72" height="57" />
                <h4>{headerText}</h4>
                <Form onSubmit={isLogin ? handleLogin : handleSignup}>
                    <Form.Group controlId="formEmail">
                        <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className={isLogin ? ("mb-3") : ("mb-0")} controlId="formPassword">
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        !isLogin &&
                        <Form.Group className="mb-3" controlId="formConfirmPassword">
                            <Form.Control value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
                        </Form.Group>
                    }

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>    
            </main>
        </div>
    )
}

export default RegistrationLoginForm;