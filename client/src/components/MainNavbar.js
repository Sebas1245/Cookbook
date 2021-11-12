import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const MainNavbar = ({leftButtonText, rightButtonText}) => {
    return (
        <Navbar bg="primary" variant="dark" style={{height: '10vh'}}>
            <Container fluid>
            <Navbar.Brand href=" ">Cookbook</Navbar.Brand>
                <Nav className="ml-auto">
                    <Button className="mx-3" variant="secondary" size="large">{leftButtonText}</Button>
            
                    <Button variant="info" size="large">{rightButtonText}</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNavbar;