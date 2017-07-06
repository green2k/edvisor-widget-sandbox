import * as React from 'react'

export const Course = ({name, description, price, ageMin, ageMax}) => (
	<div>
		<h1>{name}</h1>
		<div>Description: {description}</div>
		<div>Price: {price}</div>
		<div>Age: {ageMin} - {ageMax}</div>
	</div>
);

export default Course
