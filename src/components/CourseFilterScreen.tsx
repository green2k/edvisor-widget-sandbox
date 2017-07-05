import * as React from 'react';
import {Link, withRouter} from 'react-router-dom'

let iAge
let iLanguage

const CourseFilterScreen = ({history, onFilterChange, age, language}) => (
	<div>
		<form
			// On form-submit, redirect to "/search"
			onSubmit={
				(e) => {
					e.preventDefault()
					history.push("/search")
				}
			}
			// On form-change, dispatch a new "onFilterChange" action
			onChange={
				(e) => {onFilterChange(iAge.value, iLanguage.value)}
			}>
			<div>
				Age: <input name='studentAge' type='text' ref={node => {iAge = node}} value={age} onChange={()=>{}} />
			</div>
			<div>
				Language: <input name='courseLanguage' type='text' ref={node => {iLanguage = node}} value={language} onChange={()=>{}} />
			</div>
			<div>
				<input type="submit" hidden />
			</div>
		</form>
		<div>
			<Link to={'/search'}>Search courses!</Link>
		</div>
	</div>
);

// React-router wrapper (this will set the "history" property)
const CourseFilterScreenWithHistory = withRouter(CourseFilterScreen)

export default CourseFilterScreenWithHistory
