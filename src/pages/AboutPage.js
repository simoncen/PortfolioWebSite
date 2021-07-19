import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

import simoncenpic from '../assets/images/documents/JinLinCenResume.pdf';
import toronto from '../assets/images/toronto.png';

// using function components because we don't need any states with the need of props
function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Hi there, my name is Simon. I am a Computer Engineering student from the University of Toronto and a ex-Microsoft Part-time Assistant. I am a full-stack developer who have experience in Azure, MERN Stack, Redux, Bootstrap, and MaterialUI. </p>
                <p>Coding is my passion. I write in many languages including Javascript, C/C++, Python, and Java. Cloud computing and AI are changing our lives. I hope to integrate my software development skills into these two areas. However, I am also very intrigued about team and business management. </p>
                <p>My vision is to convert the skills that I have to bring fascinating ideas with the most potential in improving our society to live.</p>
                <p>I deeply believe in the idea of 'Knowledge reshapes destiny'.  This not only applies to myself, but also to the people I could give an impact to. Therefore, I hope that one day, I could become an entrepeneur and accomplish my goals!</p>
                <p>
                    If you want to learn more about me, feel free to send me an email through the Contact page, check out my Social Media down below, or view my 
                    <a href={simoncenpic} target="_blank" rel="noreferrer"> Resume.</a>
                </p>
            </Content>
        </div>
    );
}

export default AboutPage;