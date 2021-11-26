import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

const ImageUpload = ({setFile}) => {
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = document.getElementById('image-picker'); 
            console.log(img.src)
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
            img.src = URL.createObjectURL(e.target.files[0]); // set src to blob url
            console.log(e.target.files[0])
            console.log(img.src)
            setFile(e.target.files[0]);
        }
    }

    return (
        <Container> 
            <Row>
                <Image 
                style={{height: '35vh', objectFit: 'contain'}}
                id="image-picker" 
                src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltc1f5d681043ec5e0/5de0ba2ef1b4be78076c2a6a/Hot_meal_header_copy.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232" 
                />
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