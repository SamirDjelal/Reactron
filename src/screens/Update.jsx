import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import {resetLastCheck} from "../store/updateReducer";

class Update extends Component {
	constructor(props) {
		super(props);
		this.checkForUpdates = this.checkForUpdates.bind(this);
		this.installUpdates = this.installUpdates.bind(this);
	}
	
	componentDidMount() {
		
		window.ipcRenderer.on('CHECK_UPDATE', (event, arg) => {
			console.log('UPDATE REPLY', arg);
			this.props.resetLastCheck()
		})
		
	}
	
	checkForUpdates() {
		// const data = {
		// 	name: this.props.app_name,
		// 	version: this.props.app_version
		// }
		window.ipcRenderer.send('CHECK_UPDATE', [])
	}
	
	installUpdates() {
		// const data = {
		// 	name: this.props.app_name,
		// 	version: this.props.app_version
		// }
		window.ipcRenderer.send('IINSTALL_UPDATE', [])
	}
	
	render() {
		
		const statusText = {
			"checking-for-update": "Checking for update...",
			"update-available": "Update available.",
			"update-not-available": "Update not available.",
			"error": "Error in auto-updater.",
			"download-progress": "Download progress...",
			"update-downloaded": "Update downloaded! will install in 5 seconds."
		}
		
		let updateStatus = (statusText.hasOwnProperty(this.props.status.type)) ? statusText[this.props.status.type] : '';
		if (this.props.status.type === 'download-progress') updateStatus = updateStatus + this.props.status.payload;
		
		return (
			<Fragment>
				<h2>Update</h2>
				
				<button onClick={this.checkForUpdates}>Check for updates.</button>
				
				<p>Last Check: {this.props.lastCheck}</p>
				<p>Status: {updateStatus}</p>
				
				{this.props.status.type === 'update-downloaded' &&
				<button onClick={this.installUpdates}>Install updates and restart</button>}
			
			</Fragment>
		);
	}
	
}

export default withRouter(connect(
	state => ({
		app_name: state.app.name,
		app_version: state.app.version,
		lastCheck: state.update.lastCheck,
		status: state.update.status
	}),
	{resetLastCheck}
)(Update));
