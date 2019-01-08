import React from "react"

/* DATA */
import * as CVData from "data/pages.curriculumVitae.json"

/* COMPONENTS */
import AbstractBanner from "root/components/AbstractBanner"
import Summary from "./curriculumVitae/Summary"
import Education from "./curriculumVitae/Education"

class CurriculumVitae extends React.Component {
	render() {
		return (
			<div>
				<AbstractBanner />
				<Summary />
				<Education data={CVData.education} />
			</div>
		)
	}
}

export default CurriculumVitae
