import React from 'react';

import todolist from '../assets/images/todolist.png';
import simoncen from '../assets/images/simoncen.jpg';
import reversi from '../assets/images/RSGicon.png';
import covid from '../assets/images/covid.png';
import easymap from '../assets/images/easyMap.png';
import groundhog from '../assets/images/groundhog.png';
import microsoft from '../assets/images/microsoft.png';
import startupweekend from '../assets/images/startupweekend.png';
import animeChat from '../assets/images/animeChat.png';
import partnerVideoChat from '../assets/images/partnerVideoChat.png';
import qandajs from '../assets/images/qanda.png';
import dogchat from '../assets/images/dogchat.png';
import coinsquare from '../assets/images/coinsquare.png';
import ethtransc from '../assets/images/ethTransC.png';

import Card from './Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Simon Jinlin Cen',
                    subTitle: 'Software Engineer, Entrepreneur, Investor.',
                    imgSrc: simoncen,
                    link: 'http://www.simoncen.ca',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Coinsquare Software Engineering Co-op',
                    subTitle: 'Coinsquare Front-end Marketing Developer Intern in Toronto, Canada.',
                    imgSrc: coinsquare,
                    link: 'https://coinsquare.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Ex-Microsoft Part-time Assistant',
                    subTitle: 'Microsoft Cloud Computing and AI Part-time Assistant in Guangzhou, China.',
                    imgSrc: microsoft,
                    link: 'http://www.microsoft.com',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Startup Weekend',
                    subTitle: 'First Prize and Bussiness Model Prize winner in Startup Weekend(in partnership with Google for Startups) in Guangdong, China.',
                    imgSrc: startupweekend,
                    link: 'https://www.techstars.com/communities/startup-weekend',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Todo List',
                    subTitle: 'Todo List is a Trello-like project management web app that allows users to organize their tasks after they log in to their individual account of Todo List. This app is made using the MERN stack.',
                    imgSrc: todolist,
                    link: 'https://arcane-forest-91021.herokuapp.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'COVID-19 Tracker',
                    subTitle: "COVID-19 Tracker is a front-end project that shows real-time data of the infected, death, and recovered cases of the coronavirus. It is built with React, Material UI, and Chart.js",
                    imgSrc: covid,
                    link: 'http://cvirustracker.tech',
                    selected: false
                },
                {
                    id: 6,
                    title: 'easyMap',
                    subTitle: "easyMap is a Geographical Information System Mapping App that runs on Linux OS. Users can perform various tasks similar to Google Map on easyMap. The app is built using C++ gtk library.",
                    imgSrc: easymap,
                    link: 'https://github.com/simoncen/easyMap046',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Reversi Game',
                    subTitle: "Fun terminal-played game built with C language. Reversi Game is a game that allows users to choose between black and white chess as users can flip over the opponent's chess if he/she does it right.",
                    imgSrc: reversi,
                    link: 'https://github.com/simoncen/Reversi-Game',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Whack-A-Groundhog',
                    subTitle: "Groundhog whack game is a classic entertaining game written in C language that will help players enhance their reaction. It can be played on CPULator.",
                    imgSrc: groundhog,
                    link: 'https://github.com/simoncen/Whack-A-Groundhog1',
                    selected: false
                },
                { 
                    id: 9,
                    title: 'Anime Chat App',
                    subTitle: "Microsoft-Teams-like communication platform for users to text with each other. It is built using React and Chat Engine.",
                    imgSrc: animeChat,
                    link: 'https://anime-chat-app.netlify.app',
                    selected: false
                },
                { 
                    id: 10,
                    title: 'Partner Video Chat',
                    subTitle: "Easy-to-use video chatting platform built with React, Node.js, and Socket.io. Peer to peer connection is established using simple-peer.",
                    imgSrc: partnerVideoChat,
                    link: 'https://partner-video-chat.netlify.app',
                    selected: false
                },
                { 
                    id: 11,
                    title: 'Qanda.js Javascript Library',
                    subTitle: "Javascript front-end library for developers to create survey forms more easily.",
                    imgSrc: qandajs,
                    link: 'https://qandajs.herokuapp.com',
                    selected: false
                },
                { 
                    id: 12,
                    title: 'Friends and Dogs',
                    subTitle: "Friends-and-dogs web application allows users to discover local dog parks, vets, and pet stores, post questions to the forum, or sign up to become official dogwalkers. This app is made using the MERN stack.",
                    imgSrc: dogchat,
                    link: 'https://arcane-sea-44503.herokuapp.com/',
                    selected: false
                },
                { 
                    id: 13,
                    title: 'ethTransC',
                    subTitle: "Web3.0 blockchain application that allows user to transfer ethereum on the ropsten test network.",
                    imgSrc: ethtransc,
                    link: 'https://ethtransc.netlify.app/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id) => {
        let items = [...this.state.items]; // spread syntax for copying the entire array

        items[id].selected = items[id].selected ? false : true; // for toggling the card on and off

        items.forEach(item => { // we only want one thing to be selected at a time, one is true, the rest is false
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }

    // return a new array of cards after the user click onto one of the cards
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={e => this.handleCardClick(item.id, e)} key={item.id} />
        });
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;