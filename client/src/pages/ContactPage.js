import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import axios from 'axios';


// Contact Page needs to be a class component b/c it needs to manage states
class ContactPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: ""
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
    }

    render(){
        return (
            <div>
                <Hero title={this.props.title} /> {/* props sent from App.js, send title props to Hero.js */}
                <Content>
                    <Form onSubmit={this.submitForm} action="https://formspree.io/f/mgeprwoa" method="POST">
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            SEND
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>

                <Container className="d-flex justify-content-center p-5">
                    <Row>
                        <Col >
                            <h2 className='pl-3 lead font-weight-bold '>Univeristy of Toronto</h2>
                            <h2 className=' lead font-weight-light '>Toronto - Ontario - Canada</h2>
                            <h2 className ='pl-4 lead font-weight-light '>(+1) 437-989-1893</h2>
                            <h4 className='pl-3 lead font-weight-normal text-danger'>simoncen2@gmail.com</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContactPage;