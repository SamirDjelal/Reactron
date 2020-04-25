import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router";
// import {inc, dec} from "../store/appReducer";
import {connect} from 'react-redux';
import {activateLicense, deactivateLicense} from "../store/activationReducer";

class Activation extends Component {
	constructor(props) {
		super(props);
		this.handleActivateLicense = this.handleActivateLicense.bind(this);
		this.handleDeactivateLicense = this.handleDeactivateLicense.bind(this);
	}
	
	render() {
		return (
			<Fragment>
				<h2>Activation</h2>
				<p style={{marginBottom: 20}}>Here you can deactivate your current {this.props.app_name} license if your
					want to use it on a different
					computer.</p>
				
				<div style={{marginBottom: 20}}>
					<label style={{display: 'block', marginBottom: 7}} htmlFor="licenseField">License key</label>
					<input type="text" id="licenseField" defaultValue={this.props.license} style={{width: 500}}/>
				</div>
				
				<div style={{marginBottom: 50}}>
					<button onClick={this.handleActivateLicense} className={this.props.valideLicense ? 'hide' : ''}>Activate
						License
					</button>
					<button onClick={this.handleDeactivateLicense}
					        className={this.props.valideLicense ? '' : 'hide'}>Desactivate License
					</button>
				</div>
				
				<code>
					Serial : {this.props.license}
					<br/>
					valideLicense : {this.props.valideLicense ? 'valide' : 'invalide'}
				</code>
			</Fragment>
		);
	}
	
	handleActivateLicense() {
		let license = document.getElementById('licenseField').value;
		if (!license) return 0;
		this.props.activateLicense(license);
	}
	
	handleDeactivateLicense() {
		document.getElementById('licenseField').value = '';
		this.props.deactivateLicense();
		// todo: release the serial seat in the remote host.
	}
	
	
}


export default withRouter(connect(
	state => ({
		app_name: state.app.name,
		app_version: state.app.version,
		license: state.activation.license,
		valideLicense: state.activation.valideLicense
	}),
	{activateLicense, deactivateLicense}
)(Activation));
