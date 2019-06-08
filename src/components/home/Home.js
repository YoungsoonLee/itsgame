//import 'babel-polyfill'; 

import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Container, Image, Label, Message, Form, Header, Grid, Input, Button } from 'semantic-ui-react'

@withRouter
@inject("appStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {   
    }

    handleAbout(e) {
        e.preventDefault();
        const {history} = this.props;
        history.push('/about');
    } 
    
    handleContact(e) {
        e.preventDefault();
        const {history} = this.props;
        history.push('/contact');
    }
    
    render() {
        return (
            <Container text style={{ marginTop: '2em' }} center>
                <Image src='./images/s3.png'/>
                <Image src='./images/b1.png'/>
                <Grid>
                <Grid.Column width={5}>
                </Grid.Column>
                <Grid.Column width={9}>
                <Button color='violet' onClick={this.handleAbout.bind(this)}>About Us</Button>&nbsp;&nbsp;&nbsp;
                <Button color='violet' onClick={this.handleContact.bind(this)}>Contact</Button>
                </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Home;