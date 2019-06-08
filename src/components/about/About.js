//import 'babel-polyfill'; 

import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Container, Header, Image } from 'semantic-ui-react'

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
            <Container text style={{ marginTop: '5em' }}>
                <Header as='h2' icon dividing>
                    Its Game !!!
                </Header>
                <Header.Subheader>
                    * We are the professional game publishing company base on Vancouver Canada.
                </Header.Subheader>
                <Header.Subheader>
                    * Publishing PC & Mobile game in global.
                </Header.Subheader>
                <Image src='./images/a1.png'/>
                <br/>
                <Image src='./images/a2.png'/>
                <br/>
                <Image src='./images/a3.png'/>
                <br/>
                <br/>
                <br/>
            </Container>
        );
    }
}

export default About;