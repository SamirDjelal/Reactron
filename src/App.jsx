import React, {Component, Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './styles/App.scss';
import Menu from './components/Menu'
import Titlebar from "./components/Titlebar";
import Home from "./screens/Home";
import Setting from "./screens/Setting";
import Activation from "./screens/Activation";
import Update from "./screens/Update";


class App extends Component {
	render() {
		return (
			<Fragment>
				<Titlebar/>
				<div className="App">
					<Menu/>
					<Main/>
				</div>
			</Fragment>
		);
	}
}


const Main = () => {
	return (
		<div className="Main">
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/setting" component={Setting} exact/>
				<Route path="/activation" component={Activation} exact/>
				<Route path="/update" component={Update} exact/>
				<Redirect to="/"/>
			</Switch>
		</div>
	);
}


export default connect(
	state => ({
		app_name: state.app.name,
		app_version: state.app.version
	}),
	{}
)(App);
