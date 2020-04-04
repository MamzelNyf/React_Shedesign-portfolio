import React from 'react';
// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
// import {BrowserRouter as Router, Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

// import sofreo from '../assets/images/sofreo-mockup.jpg';


function HomePage(props){
    return(
        <section>
            <div>

                <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
              <Carousel />
            </div>
            {/* <Parallax ref={ref => (this.parallax = ref)} pages={4}>
            <ParallaxLayer offset={0} speed={0} factor={2} style={{ 
                backgroundImage: url('stars', true), 
                backgroundSize: 'cover',  
                 }}/> 
            <ParallaxLayer offset={0} speed={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div>
                <Hero title={'Where Design meets Code'} subTitle={'Developping website is fun.'} text={'Check out my projects below'} />
                {/* <Hero title={props.title} subTitle={props.subTitle} text={props.text} /> */}
                
            {/* </div>
            </ParallaxLayer>
        
            <ParallaxLayer offset={1.6} speed={-0.4} style={{ opacity: 0.3 }}>
                <div className="stage" style={{ display: 'block', marginLeft: '75%' }}>
                    <span className="ball bubble"></span>
                </div>
            </ParallaxLayer>
    
           
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
           
            </ParallaxLayer>
          </Parallax>    */} 
        </section>
    );
}

export default HomePage;