import React, {Component} from 'react';
import './styles/App.css';
import {connect} from 'react-redux';
import {inc, dec} from './store/appReducer';

class App extends Component {
	render() {
		return (
			<div className="App">
				Reactron App <br/>
				val: {this.props.val} <br/>
				<button onClick={() => this.props.inc(2)}>inc</button> <br/>
				<button onClick={() => this.props.dec(2)}>dec</button> <br/>
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
