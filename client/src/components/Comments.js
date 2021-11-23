import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Comments() {
    const dummyComments = [
        "Nice!",
        "This was very hard",
        "So tasty!"
    ]
    return (
        <Container fluid className="text-justify mt-3">
            <Row>
                <Col>
                    <h4>Comments</h4>
                </Col>
            </Row>
            <ListGroup>
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
                {dummyComments.map((comment, i) => <ListGroup.Item key={`comment-${i}`}>{comment}</ListGroup.Item>)}
            </ListGroup>
        </Container>
    )
}