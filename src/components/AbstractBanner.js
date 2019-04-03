import React from "react"

/* MEDIAS */
import BannerBlaze from "img/dev2_chalk.min.png"

/* COMPONENTS */
import Button from "./Button"

class AbstractBanner extends React.Component {
	constructor(props) {
		super()
		/* NOTE TO MYSELF: When i'm adding a stateless propType to a stateful component,
		 * don't forget to declare the new states from the propTypes
		 */
		this.state = {
			height: 720,
			caseHeight: () => {
				720 - 64
			},
			display: "initial",
			data: props.data,
		}
		this._isMounted = false
	}
	updateDimensions() {
		if (window.innerHeight <= 720) {
			let update_height = window.innerHeight - 64
			if (this._isMounted) this.setState({ height: update_height })
		} else {
			let update_height = 720 - 64
			if (this._isMounted) this.setState({ height: update_height })
		}
	}
	updateCaseDimensions() {
		if (window.innerHeight <= 720) {
			let update_height = window.innerHeight - 64
			if (this._isMounted) this.setState({ caseHeight: update_height })
		} else {
			let update_height = 720 - 64
			if (this._isMounted) this.setState({ caseHeight: update_height })
		}
	}
	updateBlazeDisplay() {
		if (window.scrollY > window.innerHeight - 64) {
			if (this._isMounted) this.setState({ display: "none" })
		} else {
			if (this._isMounted) this.setState({ display: "initial" })
		}
	}
	componentDidMount() {
		this._isMounted = true
		this.updateDimensions()
		this.updateCaseDimensions()
		window.addEventListener("resize", this.updateDimensions.bind(this))
		window.addEventListener("resize", this.updateCaseDimensions.bind(this))
		window.addEventListener("scroll", this.updateBlazeDisplay.bind(this))
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	render() {
		return (
			<section
				className="AbstractBanner theme-dark"
				style={{ height: this.state.height + "px" }}
			>
				<div
					className="AbstractBanner-container grid-container"
					style={{ height: this.state.caseHeight + "px" }}
				>
					<div
						className="AbstractBanner-blaze cell"
						style={{
							display: this.state.display,
							backgroundImage: "url(" + BannerBlaze + ")",
						}}
					/>
					<div className="AbstractBanner-title cell grid-y">
						<h1
							className="Title"
							style={{ display: this.state.display }}
						>
							Ingénieur en développement embarqué / logiciel.
						</h1>
						<h2
							className="Subtitle"
							style={{ display: this.state.display }}
						>
							près d'Aix-en-Provence, Provence-Alpes-Côte d'Azur,
							FRANCE
						</h2>
						<Button
							dark={true}
							inner={"moncv.pdf"}
							url={
								"http://www.cyrilparodi.fr/docs/CV_6.1_1018_C.pdf"
							}
						/>
					</div>
				</div>
			</section>
		)
	}
}

AbstractBanner.propTypes = {}

AbstractBanner.defaultProps = {}

export default AbstractBanner
