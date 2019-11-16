import React from 'react';

import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://shedesign.dev/src/images/${name}.svg${wrap ? ')' : ''}`


class HomePage extends React.Component{
    render(){
    return(
        <div>
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#048196' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#BBE5EE' }} />
    
            <ParallaxLayer offset={0} speed={0} factor={3} className={'colorize-blue'} style={{ 
                backgroundImage: url('stars', true), 
                backgroundSize: 'cover',  
                 }}/>
    
            {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
              <img src={url('frangipani')} style={{ width: '15%', marginLeft: '70%' }} />
            </ParallaxLayer>
    
            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>
    
            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>
    
            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>
    
            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </ParallaxLayer> */}
    
            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>

              {/* <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} /> */}
            </ParallaxLayer>
    
            <ParallaxLayer offset={0} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div>
                <Hero title={'Creating website is fun. That\'s a fact.'} subTitle={'Where Design & Code meet'} text={'Check out my projects below'} />
                {/* <Hero title={props.title} subTitle={props.subTitle} text={props.text} /> */}
                {/* <Carousel /> */}
            </div>
            </ParallaxLayer>
    
            <ParallaxLayer
              offset={2}
              speed={-0.3}
              style={{
                backgroundSize: '20%',
                backgroundPosition: 'center',
                backgroundImage: url('profile', true)
              }}
            />
                    {/* <img src={url('profile')} style={{ width: '40%' }} /> */}

            {/* <ParallaxLayer
              offset={0}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(1)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={url('profile')} style={{ width: '20%' }} />
            </ParallaxLayer>
    
            <ParallaxLayer
              offset={1}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(2)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={url('bash')} style={{ width: '40%' }} />
            </ParallaxLayer> */}
    
            <ParallaxLayer
              offset={2.5}
              speed={-0}
              onClick={() => this.parallax.scrollTo(0)}>
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </div>
    );
}
}

export default HomePage;