import React from "react";
import request from "superagent";
import PropTypes from "prop-types";
import PropShapes from "../../../prop_types/homepage";
import "../../../styles/Likes.scss";

class Likes extends React.Component {
	constructor(props) {
		super();
		this.state = {
			data: props.data,
		};
	}

	render() {
		return (
			<ul className="mii-likes">
				<li className="mii-box start">J'aime aussi ...</li>
				<br />
				{this.state.data.map((like, index) => {
					return (
						<li>
							<div className="mii-box">
								<img className="mii-box-img" src={like.jpg} />
								<div className="mii-box-span">{like.name}</div>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

Likes.PropTypes = {
	data: PropShapes.about_me.likes,
};

Likes.defaultProps = {
	data: "<NONE>",
};

export default Likes;
