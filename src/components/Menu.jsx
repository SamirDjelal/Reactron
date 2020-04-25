import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from 'react-redux';

class Menu extends Component {
	
	render() {
		
		const pathname = this.props.location.pathname;
		
		return (
			<div className="Menu">
				
				<Link to="/">
					
					<div className={"item home " + (pathname === '/' && 'active')} title="Home"/>
				
				</Link>
				
				<Link to="/setting">
					
					<div className={"item setting " + (pathname === '/setting' && 'active')} title="Setting"/>
				
				</Link>
			
			</div>
		);
	}
	
}

export default withRouter(connect(
	state => ({
		app_name: state.app.name,
		app_version: state.app.version
	}),
	{}
)(Menu));
