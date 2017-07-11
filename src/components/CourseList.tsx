import * as React from 'react'
import {Course, CoursePropsInterface} from './Course'

export interface CourseListPropsInterface {
	isLoading: boolean;
	courses: CoursePropsInterface[]
}

export const CourseList = ({isLoading, courses}: CourseListPropsInterface) => (
	<div>
		{
			(isLoading)
				? <div>Searching courses...</div>
				: (
					(courses.length >= 1)
					? courses.map(course => (
						<Course id={course.id} key={course.id} name={course.name} description={course.description} price={course.price} ageMin={!(course.ageMin) ? '*' : course.ageMin} ageMax={!(course.ageMax) ? '*' : course.ageMax}/>
					))
					: <div>Nothing found :-(</div>
				)
		}
	</div>
);

export default CourseList
