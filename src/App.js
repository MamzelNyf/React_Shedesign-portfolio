import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    titel: 'Fanny Lefert',
    headerLinks: [
      {title: 'Home', path: '/' },
      {title: 'About', path: '/about' },
      {title: 'Contact', path: '/contact' },
    ],
    home: {
      title: 'Creating website is fun. That\'s a fact.',
      subTitle: 'Where Design & Code meet',
      text: 'Check out my projects below'
    },
    about: {
      title: 'About',
    },
    contact: {
      title: 'Let\'s talk',
    }
  }
}

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={false}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            {/* expand="lg" allows the toggle button to be displayed */}
            <Navbar.Brand>Fanny LEFERT</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            {/* Toggle and Collapse allow the responsive menu - aria-controls allows accessibility - need to be same as ID in collapse*/}
            <Navbar.Collapse id="navbar-toggle">
              <Nav className='ml-auto'>
                 <Link className="nav-link" to="/">Home</Link>{/*to= create the url */}
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
