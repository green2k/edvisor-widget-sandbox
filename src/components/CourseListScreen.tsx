import * as React from 'react'
import {Link} from 'react-router-dom'

import CourseList from './CourseList'

const CourseListScreen = ({isLoading, courses}) => (
	<div>
		<CourseList courses={courses} isLoading={isLoading} />
		<hr />
		<div><Link to={'/'}>Change filters!</Link></div>
	</div>
);

export default CourseListScreen
