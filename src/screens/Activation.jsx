import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router";
// import {inc, dec} from "../store/appReducer";
import {connect} from 'react-redux';
import {activateLicense, desactivateLicense} from "../store/activationReducer";

class Activation extends Component {
	render() {
		return (
			<Fragment>
				<h2>Activation</h2>
				<input type="text" id="licenseField" defaultValue={this.props.license}/>
				<br/>
				<br/>
				<button onClick={() => this.props.activateLicense(document.getElementById('licenseField').value)}>Activate
				</button>
				<button onClick={() => this.props.desactivateLicense()}>Desactivate</button>
				<br/> <br/>
				
				Serial : {this.props.license}
				<br/>
				valideLicense : {this.props.valideLicense ? 'valide' : 'invalide'}
				
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem doloribus ducimus error
					excepturi iste maiores neque numquam officia officiis porro repudiandae sequi, veniam. Aperiam
					consequuntur inventore natus optio tempore. Amet assumenda aut consectetur, consequatur culpa cum,
					deserunt dicta dolore doloribus ea enim eos explicabo in inventore ipsum labore mollitia officiis quaerat
					quas reiciendis rem sit unde? Aliquid corp</p>
			</Fragment>
		);
	}
	
	
}


export default withRouter(connect(
	state => ({
		license: state.activation.license,
		valideLicense: state.activation.valideLicense
	}),
	{activateLicense, desactivateLicense}
)(Activation));
