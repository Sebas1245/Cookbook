import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {useNavigate} from 'react-router-dom'

const RegistrationLoginForm = ({headerText}) => {
    const navigate = useNavigate();
    const isLogin = headerText === "Please login";
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        if (!username || !password) 
            alert('You need a username and a password to log in!')
        else {
            try {
                console.log(username, password, confirmPassword)
                const data = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    })
                })
                if (data.ok) {
                    sessionStorage.setItem('token', data.token);
                    sessionStorage.setItem('user', data.user);
                    navigate('/', {state: 'LoggedIn'});
                }
            } catch (e) {
                console.log(e);
                alert(e);
            }
        }
    }
    const handleSignup = async (e) => {
        e.preventDefault()
        console.log(username, password, confirmPassword)
        if (!username || !password) {
            alert('You need a username and a password to sign up!')
        } else if (password !== confirmPassword) {
            alert('Passwords do not match!')
        } else {
            try {
                console.log(username, password, confirmPassword)
                const data = await fetch('http://localhost:5000/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password,
                        confirmPassword
                    })
                })
                console.log(data);
                alert(JSON.stringify(data));
                if (data.ok) {
                    navigate('/login', {state: 'Signed up'});
                }
            } catch (e) {
                console.log(e);
                alert(e);
            }
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