import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ins from '../assets/images/insIcon.png';
import github from '../assets/images/githubIcon.png';
import linkedin from '../assets/images/linkedinIcon.png';
import wechat from '../assets/images/wechat.png';
import wechatqr from '../assets/images/wechatqr.png';

function Footer(){
    return(
        <footer className='mt-5'> {/*standard html footer element */}
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>
                        Love from Simon Cen
                    </Col>

                    <Col className='p-0 d-flex justify-content-center'>
                        <a href="https://www.instagram.com/simonsum2/" target="_blank" rel="noreferrer">
                            <img src={ins} alt="instagram" width="30"/>
                        </a>
                    </Col>

                    <Col className='p-0 d-flex justify-content-center'>
                        <a href="https://github.com/simoncen" target="_blank" rel="noreferrer">
                            <img src={github} alt="github" width="30"/>
                        </a>
                    </Col>
                        
                    <Col className='p-0 d-flex justify-content-center'>
                        <a href="https://www.linkedin.com/in/simon-jinlin-cen/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin" width="30"/>
                        </a>
                    </Col>

                    <Col className='p-0 d-flex justify-content-center'>
                        <a href={wechatqr} target="_blank" rel="noreferrer">
                            <img src={wechat} alt="linkedin" width="35"/>
                        </a>
                    </Col>

                    <Col className='p-0 d-flex justify-content-end' md={3}>
                        Copyright @ 2021 by Simon Cen
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;