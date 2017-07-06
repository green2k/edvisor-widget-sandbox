import * as React from 'react'
import {Link} from 'react-router-dom'

import CourseList from './CourseList'

const CourseListScreen = ({isLoading, courses}) => (
	<div>
		<div><Link to={'/'}>Change filters!</Link></div>
		<hr />
		<CourseList courses={courses} isLoading={isLoading} />
	</div>
);

export default CourseListScreen
