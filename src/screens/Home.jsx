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
				Reactron App <br/>
				Val: {this.props.val} <br/>
				<button onClick={() => this.props.inc(2)}>inc</button>
				<br/>
				<button onClick={() => this.props.dec(2)}>dec</button>
				<br/>
			</Fragment>
		);
	}
}

// export default Home;

export default withRouter(connect(
	state => ({
		val: state.app.val
	}),
	{
		inc, dec
	}
)(Home));
