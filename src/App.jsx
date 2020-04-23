import React, {Component} from 'react';
import './styles/App.scss';

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
						<Route path="/setting" component={Setting} exact/>
					</Switch>
				</div>
				
			</div>
		);
	}
}

export default App;
