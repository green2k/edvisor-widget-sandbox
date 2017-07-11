import * as React from 'react'
import {Link} from 'react-router-dom'

import CourseList from './CourseList'
import {CoursePropsInterface} from './Course'

export interface CourseListScreenPropsInterface {
	isLoading: boolean;
	courses: CoursePropsInterface[];
}

export const CourseListScreen = ({isLoading, courses}: CourseListScreenPropsInterface) => (
	<div>
		<div><Link to={'/'}>Change filters!</Link></div>
		<hr />
		<CourseList courses={courses} isLoading={isLoading} />
	</div>
);

export default CourseListScreen
