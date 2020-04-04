import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




//Import Elements to build pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

//Import Images
import Logo from './assets/images/logo-shedesigndev.svg';

// import './App.css';
import './sass/App.scss'
class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    title: 'Fanny Lefert',
    headerLinks: [
      {title: 'Home', path: '/' },
      {title: 'About', path: '/about' },
      {title: 'Contact', path: '/contact' },
    ],
    home: {
      title: 'Where Design meets Code',
      subTitle: 'Hi, I\'m Fanny, Front-End Designer ',
      text: 'Scroll down to view my work'
    },
    about: {
      title: 'My goals: nice & accessible',
    },
    contact: {
      title: 'Let\'s Build Something Together',
    }
  }
}

  render(){
  // function App() {

    
      return (
      <div>
      {/* theme is available because we’ve wrapped our global styles with ThemeProvider. */}
      <>
      
      <div>
        <Router>
          <Container className="p-0 bubble-bck" fluid={true} >
          <Navbar bg="transparent" expand="lg">
              {/* expand="lg" allows the toggle button to be displayed */}
              <Navbar.Brand>
              <Link className="nav-link hover" to="/"><img src={Logo} alt="SheDesign.dev Logo"/></Link>
              </Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              {/* Toggle and Collapse allow the responsive menu - aria-controls allows accessibility - need to be same as ID in collapse*/}
              <Navbar.Collapse id="navbar-toggle">
                <Nav className='ml-auto'>
                  <div className='hover-lined'><Link className="nav-link hover" to="/about">About</Link></div>
                  <div className='hover-lined'><Link className="nav-link hover" to="/contact">Contact</Link></div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* React router uses link instead of button or anchor, route says"whenever you are at this path, render this page" */}
            {/* exact is looking for the exact path/property/match and not only / */}
            {/* the url and the content change when clicking on button  because we render a different component */}
            {/* we are using the state from the main app page to pass that data in the props into our pages , pages will not be class-based components, they will be functoonal components and simply display date.*/}
            {/* while we maintain the bulk of the states in the main component for our application */}
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
            <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />      
            
      
            <Footer />
  
          </Container>    
        </Router>   
      </div>
      </>
      </div>
 

    );
  }
}

export default App;
