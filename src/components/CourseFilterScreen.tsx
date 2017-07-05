import * as React from 'react';
import {Link, withRouter} from 'react-router-dom'

class CourseFilterScreen extends React.Component<any> {

	private iAgeNode;
	private iLanguageNode;

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<form
					// On form-submit, redirect to "/search"
					onSubmit={
						(e) => {
							e.preventDefault()
							this.props.history.push("/search")
						}
					}
					// On form-change, dispatch a new "onFilterChange" action
					onChange={
						(e) => {
							this.props.onFilterChange(this.iAgeNode.value, this.iLanguageNode.value)
						}
					}>
					<div>
						Age: <input name='studentAge' type='text' ref={node => {this.iAgeNode = node}} value={this.props.age} onChange={()=>{}} />
					</div>
					<div>
						Language: <input name='courseLanguage' type='text' ref={node => {this.iLanguageNode = node}} value={this.props.language} onChange={()=>{}} />
					</div>
					<div>
						<input type="submit" value="Search courses!" />
					</div>
				</form>
			</div>
		);
	}
}

// React-router wrapper (this will set the "history" property)
const CourseFilterScreenWithHistory = withRouter(CourseFilterScreen)

export default CourseFilterScreenWithHistory
