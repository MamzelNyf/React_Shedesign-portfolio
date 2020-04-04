import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content';


function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>I’m a traveller, a dreamer looking for new challenges, I want to use my energy &amp; my expertise to support creative projects.</p>
                <br/>
                <p>I’m  a multitask graphic designer, technically proficient &amp; easy to work with. I worked as publishing software trainer, webdesigner, content manager, product designer assistant, magazine designer… </p>
                <p>I have 5 years work experience where I successfully designed solutions for print media and websites.</p>
                <br/>
                <p>Professional details in my <a href="img/FannyLEFERT-GraphicDesigner.pdf">resume</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;