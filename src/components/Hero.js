import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props){

    return(
          <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-right text-right py-5">
                    <Col md={{span: 8, offset: 3}} sm={12}>{/* properties inherent at boostrap component imported */}
                        { props.title &&<h1 className="display-3 font-weight-bolder">{props.title}</h1>}
                        { props.subTitle &&<h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                        { props.text &&<h4 className="lead font-weight-light">{props.text}</h4>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;