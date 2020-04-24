import React, {Component, Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './styles/App.scss';
import Menu from './components/Menu'
import Titlebar from "./components/Titlebar";
import Home from "./screens/Home";
import Setting from "./screens/Setting";


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
				<Redirect to="/"/>
			</Switch>
		</div>
	);
}


export default App;
