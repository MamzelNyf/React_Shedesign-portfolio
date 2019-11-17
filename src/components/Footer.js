import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <footer className={'site-footer'}>
            <Container fluid={true}>
                <Row className="justify-content-between px-3">
                    <Col className="p-0" md={3} sm={12}>
                        This is the footer
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Fanny Lefert.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;