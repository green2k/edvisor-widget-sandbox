import * as React from 'react'
import Course from './Course'

export const CourseList = ({isLoading, courses}) => (
	<div>
		{
			(isLoading)
				? <div>Searching courses...</div>
				: (
					(courses.length >= 1)
					? courses.map(course => (
						<Course key={course.id} name={course.name} description={course.description} price={course.price} ageMin={!(course.ageMin) ? '*' : course.ageMin} ageMax={!(course.ageMax) ? '*' : course.ageMax}/>
					))
					: <div>Nothing found :-(</div>
				)
		}
	</div>
);

export default CourseList
