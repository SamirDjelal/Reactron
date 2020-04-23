import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {inc, dec} from '../store/appReducer';
import {withRouter} from "react-router";

class Home extends Component {
	
	componentDidMount() {
		// console.log(this.props);
	}
	
	render() {
		return (
			<Fragment>
				<h2>Reactron App</h2>
				<code>Redux State `val`= {this.props.val}</code>
				<br/><br/>
				<button onClick={() => this.props.inc(2)}>inc</button>
				<button onClick={() => this.props.dec(2)}>dec</button>
				<br/>
			</Fragment>
		);
	}
}

export default withRouter(connect(
	state => ({
		val: state.app.val
	}),
	{inc, dec}
)(Home));
