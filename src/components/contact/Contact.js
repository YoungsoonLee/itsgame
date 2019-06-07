//import 'babel-polyfill'; 

import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Container, List, Image } from 'semantic-ui-react'

@withRouter
@inject("appStore")
@observer
class Contact extends Component {
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
                    <List.Item>Send email to me. <a href = "mailto: youngtip@gmail.com">Ted Lee</a> </List.Item>
                </List>
            </Container>
        );
    }
}

export default Contact;