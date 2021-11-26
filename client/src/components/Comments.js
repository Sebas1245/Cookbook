import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import {getToken} from '../services/tokenUtilities';
import {postComment, getCommentsForRecipe} from '../services/apiCalls'

export default function Comments({recipeId}) {
    const loggedIn = getToken();
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    useEffect( () => {
        const fetchRecipeAndComments = async () => {
            const fetchedComments = await getCommentsForRecipe(recipeId);
            setComments(fetchedComments);
        }
        fetchRecipeAndComments()
    }, [recipeId])
    const submitComment = async (e) => {
        e.preventDefault();
        try {
            const updatedComments = await postComment({commentText, recipeId}); 
            setComments(updatedComments);   
            setCommentText('');
            
        } catch (error) {
            alert(error);
        }        
    }
    const noCommentText = loggedIn ? "Be the first to comment!" : "There are no comments for this recipe"
    const commentListItems = comments.length === 0 ? 
                            <p><em>{noCommentText}</em></p> 
                            : comments.map(
                                (comment, i) => 
                                <ListGroup.Item key={`comment-${i}`}>
                                    <p>{comment.text}</p>  
                                    <p className="text-end"><strong>{comment.author.username}</strong></p>
                                </ListGroup.Item>
                            )

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
                                <form onSubmit={submitComment}>
                                <InputGroup className="m-0">
                                    <FormControl
                                    value={commentText}
                                    onChange={e => setCommentText(e.target.value)}
                                    placeholder="Say something nice"
                                    />
                                    <Button type="submit" variant="secondary" id="button-addon2">
                                    Add comment
                                    </Button>
                                </InputGroup>
                                </form>
                            </ListGroup.Item>
                        }
                        {
                            commentListItems
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}