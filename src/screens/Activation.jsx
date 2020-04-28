import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router";
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
				
				<div style={{marginBottom: 20}} className={this.props.validLicense ? 'hide' : ''}>
					<label style={{display: 'block', marginBottom: 7}} htmlFor="licenseField">License key</label>
					<input type="text" id="licenseField" defaultValue={this.props.license} style={{width: 500}}/>
				</div>
				
				<div style={{marginBottom: 20}}>
					<button onClick={this.handleActivateLicense} className={this.props.validLicense ? 'hide' : ''}>Activate
						License
					</button>
					<button onClick={this.handleDeactivateLicense}
					        className={this.props.validLicense ? '' : 'hide'}>Desactivate License
					</button>
				</div>
				
				<code>
					Serial : {this.props.license}
					<br/>
					validLicense : {this.props.validLicense ? 'valide' : 'invalide'}
				</code>
			</Fragment>
		);
	}
	
	handleActivateLicense() {
		let license = document.getElementById('licenseField').value;
		if (!license) return 0;
		this.props.activateLicense(license);
		this.props.history.push('/')
	}
	
	handleDeactivateLicense() {
		document.getElementById('licenseField').value = '';
		// todo: release the serial seat in the remote host.
		this.props.deactivateLicense();
	}
	
	
}


export default withRouter(connect(
	state => ({
		app_name: state.app.name,
		app_version: state.app.version,
		license: state.activation.license,
		validLicense: state.activation.validLicense
	}),
	{activateLicense, deactivateLicense}
)(Activation));
