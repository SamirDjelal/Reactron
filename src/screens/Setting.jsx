import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

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
				
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus hic praesentium quaerat quam
					soluta veniam. Accusantium, autem commodi deleniti eos est porro sit? Ab alias aut culpa dolorum fuga
					fugit id maxime necessitatibus neque nihil placeat quasi quia repudiandae sunt vel, velit voluptate. A ab
					ad aliquid animi asperiores assumenda autem cumque cupiditate delectus dolor dolorem dolorum eligendi ex
					excepturi exercitationem illo ipsum iure maiores molestias necessitatibus neque, nesciunt nulla obcaecati
					odio officia officiis perspiciatis provident quam quas quibusdam, quo recusandae soluta tenetur ut vel
					veniam voluptatem. Accusantium earum magnam numquam quasi qui? Earum eius eligendi ipsum magnam
					nihil.</p>
			</Fragment>
		);
	}
}

export default withRouter(Setting);
