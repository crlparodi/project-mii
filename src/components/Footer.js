import React from "react"

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* MEDIAS */
import SocialMedia from "root/components/SocialMedia";

class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.data = props.data;
	}

	render() {
		return (
			<div className="Footer isWrapper">
				<div className="Footer isContainer">
					<div className="Footer-contacts">
						<SocialMedia
							email={this.data.email}
							profiles={this.data.profiles}
						/>
					</div>
					<div className="Footer-misc">
					<p>
						...powered by{" "}
						<a
							href="https://reactjs.org/"
							className="ob-link"
							style={{ textDecoration: "underline" }}
						>
							React.js
						</a>
						.
						<br />
						Ce site est sous licence{" "}
						<a
							href="https://www.gnu.org/licenses/gpl-3.0"
							className="ob-link"
							style={{ textDecoration: "underline" }}
						>
							GNU General Public License v3
						</a>
						.
						<br />
						Cyril Parodi, 2018 - 2020.
					</p>
				</div>
				</div>
			</div>
		)
	}
}

Footer.propTypes = {
	data: PropSets.basics
};

export default Footer
