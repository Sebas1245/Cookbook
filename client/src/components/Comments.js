import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import {getToken} from '../services/tokenUtilities';

export default function Comments({comments}) {
    const loggedIn = getToken();
    return (
        <Container fluid className="text-justify mt-3">
            <Row>
                <Col>
                    <h4>Comments</h4>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <ListGroup variant="flush">
                        {
                            loggedIn &&
                            <ListGroup.Item>
                                <InputGroup className="m-0">
                                    <FormControl
                                    placeholder="Say something nice"
                                    />
                                    <Button variant="secondary" id="button-addon2">
                                    Add comment
                                    </Button>
                                </InputGroup>
                            </ListGroup.Item>
                        }
                        {comments.map((comment, i) => 
                            <ListGroup.Item key={`comment-${i}`}>
                                <p>{comment.text}</p>  
                                <p className="text-end"><strong>{comment.author.username}</strong></p>
                            </ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}