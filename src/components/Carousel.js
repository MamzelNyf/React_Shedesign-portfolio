import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card.js'

import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'SoFreo',
                    subTitle: 'Description of Project 1',
                    imgSrc: project1,
                    link: 'https://sofreo.com.au',
                    selected:false
                },
                {
                    id: 1,
                    title: 'BoomRadio',
                    subTitle: 'Description of Project 2',
                    imgSrc: project2,
                    link: 'https://boomradio.com.au',
                    selected:false
                },
                {
                    id: 2,
                    title: 'LittleGreenFootprints',
                    subTitle: 'Description of Project 3',
                    imgSrc: project3,
                    link: 'https://shedesign.dev/lespetitspasverts',
                    selected:false
                },
            ]
        }
    }
    // create a method with a spread operator
    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        // retrieve project selected with the ID and to toggle the project slected to non-selected
        items[id].selected = items[id].selected ? false : true;
        //loop through each project and set the selected to false
        items.forEach(items => {
            if(items.id !== id) {
                items.selected =false;
            }
        });

        this.setState({
            items
        });
    }
    //create a method which maps the items and creates a component for each of the item
    makeItems = (items) => {
        return items.map(item => {
            //bind event and item.id, provide a key because we are mapping through a array and we create new elements for each item
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;