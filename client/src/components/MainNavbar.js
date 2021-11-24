import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const MainNavbar = ({leftButtonText, rightButtonText, leftButtonAction, rightButtonAction}) => {
    return (
        <Navbar bg="primary" variant="dark" style={{height: '12%'}}>
            <Container fluid>
            <Navbar.Brand href="/">Cookbook</Navbar.Brand>
                <Nav className="ml-auto">
                    {
                        leftButtonText &&
                        <Button onClick={leftButtonAction} className="mx-3" variant="secondary" size="large">{leftButtonText}</Button>
                    }
                    {
                        rightButtonText && 
                        <Button onClick={rightButtonAction} variant="info" size="large">{rightButtonText}</Button>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNavbar;