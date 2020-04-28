import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Setting extends Component {
	render() {
		return (
			<Fragment>
				<h2>Setting</h2>
				
				<Link to="/activation">
					<button>Activation</button>
				</Link>
				
				<Link to="/update">
					<button>Update</button>
				</Link>
				
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</Fragment>
		);
	}
}

export default withRouter(connect(
	state => ({
		app_name: state.app.name,
		app_version: state.app.version
	}),
	{}
)(Setting));
