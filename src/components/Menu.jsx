import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<Link to="/">
					<div className={"item home " + (this.props.location.pathname === '/' && 'active')}/>
				</Link>
				<Link to="/setting">
					<div className={"item setting " + (this.props.location.pathname === '/setting' && 'active')}/>
				</Link>
			</div>
		);
	}
}

export default withRouter(Menu);
