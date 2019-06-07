//import 'babel-polyfill'; 

import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Container, List, Image } from 'semantic-ui-react'

@withRouter
@inject("appStore")
@observer
class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {   
    }


    render() {
        return (
            <Container text style={{ marginTop: '2em' }}>
                <Image src='./images/s3.png'/>
                <List bulleted center>
                    <List.Item>We are the professional game publishing company base on Vancouver Canada.</List.Item>
                    <List.Item>Publishing PC & Mobile game in global.</List.Item>
                </List>
            </Container>
        );
    }
}

export default About;