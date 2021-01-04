import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// use stateless functional compoents with no need of props
function Hero (props){
    return(
        <Jumbotron  className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        {props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1>}
                        {props.subTitle && <h2 className ='display-4 font-weight-light'>{props.subTitle}</h2>}
                        {props.text && <h4 className='lead font-weight-light'>{props.text}</h4>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;