import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

// using function components because we don't need any states
function HomePage(props){
    return(
        <div style={{backgroundColor: 'white'}}>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel />
        </div>
    );
}

export default HomePage;