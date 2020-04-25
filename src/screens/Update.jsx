import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux';

class Update extends Component {
	render() {
		return (
			<Fragment>
				<h2>Update</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem doloremque iure iusto quidem
					quisquam sit, totam ut! A, asperiores aut consectetur deleniti enim ex ipsum itaque iure mollitia nisi
					omnis quae quod similique sit velit! Animi cumque laudantium nihil quaerat quo suscipit, voluptatem. Ad
					facilis minus quam totam voluptate.</p>
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
)(Update));