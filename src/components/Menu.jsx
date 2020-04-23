import React, {Component} from 'react';
// import '../styles/Menu.scss';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<Link to="/">
					<div className={"item home " + (this.props.location.pathname === '/' && 'active')}>H
					</div>
				</Link>
				<Link to="/setting">
					<div className={"item setting " + (this.props.location.pathname === '/setting' && 'active')}>S
					</div>
				</Link>
			</div>
		);
	}
}

// export default withRouter(connect(
// 	state => ({
// 		val: state.app.val
// 	}),
// 	{
// 		inc, dec
// 	}
// )(Menu));

export default withRouter(Menu);
