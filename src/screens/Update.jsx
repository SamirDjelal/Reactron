import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import {resetLastCheck} from "../store/updateReducer";

class Update extends Component {
	constructor(props) {
		super(props);
		this.checkForUpdates = this.checkForUpdates.bind(this);
	}
	
	
	componentDidMount() {
		
		window.ipcRenderer.on('CHECK_UPDATE', (event, arg) => {
			console.log('UPDATE REPLY', arg);
			this.props.resetLastCheck()
		})
		
	}
	
	/**
	 * params
	 */
	checkForUpdates() {
		const data = {
			name: this.props.app_name,
			version: this.props.app_version
		}
		window.ipcRenderer.send('CHECK_UPDATE', data)
	}
	
	render() {
		return (
			<Fragment>
				<h2>Update</h2>
				
				<button onClick={this.checkForUpdates}>Check for updates.</button>
				
				<p>Last Check: {this.props.lastCheck}</p>
			
			</Fragment>
		);
	}
	
}

export default withRouter(connect(
	state => ({
		app_name: state.app.name,
		app_version: state.app.version,
		lastCheck: state.update.lastCheck
	}),
	{resetLastCheck}
)(Update));
