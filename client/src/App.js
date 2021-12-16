import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import simoncenpic from './assets/images/documents/JinLin-Cen-SDE-Resume.pdf';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Simon Cen',
      headerLinks: [ // navbar
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      // top level info for each page: home, about, contact
      home: { 
        title: 'This is Simon J. Cen',
        subTitle: 'Developer from Toronto',
        text: 'Check out my work and project experience below by clicking on the cards:'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Hey, What\'s Up?'
      },
      resume: {
        link: simoncenpic
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true} > {/* takes up the entire screen using fluid*/}
          
          <Navbar className="border-bottom" bg="transparent" expand="lg"> {/*able to collapse with expand large */}
            <Navbar.Brand>Be The Best Forever</Navbar.Brand>
            {/*/toggle and callapsing session when user is usiing mobile device, the three bar
            on the top right*/}
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle"> 
              <Nav className="ml-auto"> {/*push the home about and contact to the right */}
                {/* In React Router, Link is for navigation, Route is for route matchers*/}
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/About">About</Link>
                <Link className="nav-link" to="/Contact">Contact</Link> {/*nav-link is a bootstrap thing */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          {/*Link component act as the <a /> in html, it links to Route component in react router */}
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer/>

        </Container>
      </Router>
    );
  }
}

export default App;
