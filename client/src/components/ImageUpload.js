import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

const ImageUpload = () => {
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = document.getElementById('recipe-image'); 
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
            img.src = URL.createObjectURL(e.target.files[0]); // set src to blob url
        }
    }

    return (
        <Container style={{justifyContent: 'end'}}> 
            <Row>
                <Image
                style={{maxHeight: "100%", maxWidth: "100%"}} 
                id="recipe-image" 
                src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltc1f5d681043ec5e0/5de0ba2ef1b4be78076c2a6a/Hot_meal_header_copy.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232" 
                thumbnail/>
            </Row>
            <Row>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload an image</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
            </Row>
        </Container>
    )
}

export default ImageUpload;