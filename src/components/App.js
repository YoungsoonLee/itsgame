//import Header from './Header';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
//import PrivateRoute from './PrivateRoute';

// Components
import TopBar from "./TopBar";
import {Home} from './home/index';
import {About} from './about/index';
import {Contact} from './contact/index';

@inject('appStore')
@withRouter
@observer
export default class App extends React.Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {

      return (
        <div>
            <TopBar />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/Contact" component={Contact} />
        </div>
      );
    
  }
}
