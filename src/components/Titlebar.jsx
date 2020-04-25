import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux';

class Titlebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			maximized: false
		}
		this.handleMinimize = this.handleMinimize.bind(this);
		this.handleMaximize = this.handleMaximize.bind(this);
		this.handleClose = this.handleClose.bind(this);
		
		
	}
	
	render() {
		return (
			<div className="Titlebar">
				<div className="Controls">
					<div className="Item Close" onClick={this.handleClose}/>
					<div className="Item Minimize" onClick={this.handleMinimize}/>
					<div className={"Item Maximize " + (this.state.maximized)} onClick={this.handleMaximize}/>
				</div>
				<div className="Title" onDoubleClick={this.handleMaximize}>{this.props.app_name} <span
					className="Version">v{this.props.app_version}</span></div>
				<div className="Icon"/>
			</div>
		);
	}
	
	
	// ipcRenderer
	
	handleMinimize() {
		window.remote.getCurrentWindow().minimize();
	}
	
	handleMaximize() {
		if (this.state.maximized === false) {
			this.setState((prevState) => ({maximized: !prevState.maximized}));
			window.remote.getCurrentWindow().maximize();
		} else {
			this.setState((prevState) => ({maximized: !prevState.maximized}));
			window.remote.getCurrentWindow().unmaximize();
		}
		// console.log(window.remote.getCurrentWindow().isMaximized());
		// if (window.remote.getCurrentWindow().isMaximized()) {
		// 	console.log('unmaximize');
		// 	window.remote.getCurrentWindow().unmaximize();
		// } else {
		// 	console.log('maximize');
		// 	window.remote.getCurrentWindow().maximize();
		// }
	}
	
	handleClose() {
		window.remote.getCurrentWindow().close();
	}
	
}

export default withRouter(connect(
	state => ({
		app_name: state.app.name,
		app_version: state.app.version
	}),
	{}
)(Titlebar));
