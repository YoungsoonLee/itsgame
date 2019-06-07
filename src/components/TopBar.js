import React, { Component } from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Menu, Dropdown, Icon, Image,Header } from 'semantic-ui-react';

@withRouter
@observer
export default class TopBar extends Component {

	state = { activeItem: 'home' };

	constructor(props) {
		super(props);
	}


	handleItemClick = (e, { name }) => { 
		e.preventDefault();

		this.setState({ activeItem: name });

		if (name === 'home') {
			this.props.history.push('/');
		}else if (name === 'Its Game') {
			this.props.history.push('/');
		}else{
			this.props.history.push('/'+name);
		}
	};

	render() {
        var Viewpane = null;
        const { activeItem } = this.state;

        Viewpane = (
            <Menu.Menu position='right'>
                <Menu.Item name='about' active={activeItem === 'About'} onClick={this.handleItemClick} />
				<Menu.Item name='contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Menu.Menu>
        )

		return (
			<div>
				<Menu size='tiny' pointing borderless={true} fixed='top'>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Menu.Item name='Its Game' active={activeItem === 'Its Game'} onClick={this.handleItemClick} />
					{Viewpane}
				</Menu>
			</div>
		);
	}
}