//import 'babel-polyfill'; 

import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Container, Image, Button, Message, Form, Header, Grid, Input } from 'semantic-ui-react'

@withRouter
@inject("appStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {   
    }


    render() {
        return (
            <Container text style={{ marginTop: '2em' }}>
                <Image src='./images/s3.png'/>
                <Image src='./images/b1.png'/>
            </Container>
        );
    }
}

export default Home;