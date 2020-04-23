import React, {Component} from 'react';
import './styles/App.scss';
import {connect} from 'react-redux';
import {inc, dec} from './store/appReducer';
import Menu from './components/Menu'

import {Switch, Route} from 'react-router-dom';
import Home from "./screens/Home";
import Setting from "./screens/Setting";


class App extends Component {
	render() {
		return (
			<div className="App">
				
				<Menu/>
				
				<div className="Main">
					<Switch>
						<Route path="/" component={Home} exact/>
						<Route path="/setting" component={Setting}/>
					</Switch>
				</div>
				
				{/*Reactron App <br/>*/}
				{/*val: {this.props.val} <br/>*/}
				{/*<button onClick={() => this.props.inc(2)}>inc</button> <br/>*/}
				{/*<button onClick={() => this.props.dec(2)}>dec</button> <br/>*/}
			
			</div>
		);
	}
}

export default connect(
	state => ({
		val: state.app.val
	}),
	{
		inc, dec
	}
)(App);
