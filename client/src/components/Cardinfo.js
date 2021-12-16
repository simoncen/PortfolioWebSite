import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props){
    // hold the react-spring style we are using
    const style = useSpring({opacity: 1, from: {opacity: 0}}) // takes in an object, whatever animation you want

    return(
        <animated.div className="s-card-info" style={style}>
            <p className="s-card-title">{props.title}</p>
            <p className="s-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </animated.div>
    );
}

export default CardInfo;