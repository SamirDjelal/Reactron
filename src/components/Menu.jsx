import React, {Component} from 'react';
import '../styles/Menu.scss';
import {connect} from 'react-redux';
import {inc, dec} from '../store/appReducer';
import {Link} from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<Link to="/">
					<div className="item active">H</div>
				</Link>
				<Link to="/setting">
					<div className="item">S</div>
				</Link>
			</div>
		);
	}
}

export default connect(
	state => ({
		val: state.app.val
	}),
	{
		inc, dec
	}
)(Menu);
