import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import {BrowserRouter as Router, Link } from 'react-router-dom';

import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

import sofreo from '../assets/images/sofreo-mockup.jpg';



// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://shedesign.dev/src/images/${name}.svg${wrap ? ')' : ''}`


class HomePage extends React.Component{
    render(){
    return(
        <Router>
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <ParallaxLayer offset={1} speed={1}/>
            <ParallaxLayer offset={2} speed={1}/>
            <ParallaxLayer offset={0} speed={0} factor={3} style={{ 
                backgroundImage: url('stars', true), 
                backgroundSize: 'cover',  
                 }}/>
    
            <ParallaxLayer offset={1.6} speed={-0.4} style={{ opacity: 0.3 }}>

              {/* <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} /> */}
                <div className="stage" style={{ display: 'block', marginLeft: '75%' }}>
                    <span className="ball bubble"></span>
                </div>
÷
            </ParallaxLayer>
    
            <ParallaxLayer offset={0} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div>
                <Hero title={'Where Design meets Code'} subTitle={'Developping website is fun.'} text={'Check out my projects below'} />
                {/* <Hero title={props.title} subTitle={props.subTitle} text={props.text} /> */}
                {/* <Carousel /> */}
            </div>
            </ParallaxLayer>
    
            <ParallaxLayer
                offset={2.25}
              speed={-0.3}
              style={{
                backgroundSize: '40%',
                backgroundPosition: 'center',
                backgroundImage: url('profile', true)
              }}
            />
            <ParallaxLayer
              offset={0}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(1)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            </ParallaxLayer>
    
            <ParallaxLayer
              offset={1}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(2)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={url('bash')} style={{ width: '40%' }} alt={"SheDesign.dev Logo"} />
            </ParallaxLayer>
    
            <ParallaxLayer
              offset={2.87}
              speed={-0}
              onClick={() => this.parallax.scrollTo(0)}
              style={{ position:'absolute', bottom:'-10' }}>
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </Router>
    );
}
}

export default HomePage;