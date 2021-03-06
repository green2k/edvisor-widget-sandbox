import * as React from 'react';
import {Link, withRouter} from 'react-router-dom'

import CourseTypeInput from './CourseTypeInput'
import FormInputAge from './FormInputAge'
import FormInputCountry from '../containers/FormInputCountry'

class CourseFilterScreen extends React.Component<any, any> {

	constructor(props) {
		super(props);

		// Initial state
		this.state = {
			age: props.age || 22, 
			countryId: props.countryId || -1, 
			language: props.language || '', 
			courseTypes: props.courseTypes || []
		};

		// Bind private functions
		this.handleAgeChange = this.handleAgeChange.bind(this);
		this.handleCountryChange = this.handleCountryChange.bind(this);
		this.handleLanguageChange = this.handleLanguageChange.bind(this);
		this.handleCourseTypesChange = this.handleCourseTypesChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	private handleAgeChange(event) {
		const newState = this.state;
		newState.age = event.target.value;
		this.setState(newState);
	}

	private handleCountryChange(event) {
		const newState = this.state;
		newState.countryId = event.target.value;
		this.setState(newState);
	}

	private handleLanguageChange(event) {
		const newState = this.state;
		newState.language = event.target.value;
		this.setState(newState);
	}

	private handleCourseTypesChange(courseTypes) {
		const newState = this.state;
		newState.courseTypes = courseTypes;
		this.setState(newState);
	}

	private handleSubmit(event) {
		event.preventDefault()

		// Dummy input validation
		if (!(this.state.age)) return alert('Please enter your age.');
		
		// Dispatch a Redux action & redirect to "/search"
		this.props.onFilterChange(this.state.age, this.state.countryId, this.state.language, this.state.courseTypes)
		this.props.history.push("/search")
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						Age: <FormInputAge name='studentAge' value={this.state.age} onChange={this.handleAgeChange} />
					</div>
					<div>
						Country: <FormInputCountry name='studentCountry' selectedCountryId={this.state.countryId} onChange={this.handleCountryChange} />
					</div>
					<div>
						Language: <input name='courseLanguage' type='text' value={this.state.language} onChange={this.handleLanguageChange} />
					</div>
					<div>
						Course type: <CourseTypeInput options={this.props.courseTypesAll} defaultValues={this.state.courseTypes} isLoading={this.props.isLoading} onChange={this.handleCourseTypesChange} />
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
