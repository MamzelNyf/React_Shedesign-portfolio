import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Axios from 'axios';


class ContactPage extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        // console.log(event); 

        const target = event.target;
        // for a checkbox. if type of input is checkbox, then value will be checked, if not eqaul the value typed in or choosen.
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        //prevent the default behaviour which is refresing the page when pressing the button
        event.preventDefault();

        //disabled the ability to send the email twice before receiving the confirmation message
        this.setState({
            disabled: true,

            //test to see the result when the email is sent, put false to see error msg
            // emailSent: true
        });

        //use Axios to provide a http client for email
        //promise-based HTTP client that works both in the browser and in a node.js environment
        Axios.post('http://localhost:3050/api/email', this.state)
            .then(res => {
            if(res.data.success) {
                this.setState({
                disable: false,
                emailSent: true
                });
            }else{
                this.setState({
                    disable: false,
                    emailSent: false
                });
            }            
        })
        .catch(err => {
            this.setState({
                disable: false,
                emailSent: false
            });
        })
    }

    render() {
        return(
            <div>
                <Hero title={this.props.title} />
                <Content>
                    {/* add boostrap react component for the form */}
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmfor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmfor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}
                    </Form>
                </Content>
                <Footer />
            </div>

        );
    }

}

export default ContactPage;