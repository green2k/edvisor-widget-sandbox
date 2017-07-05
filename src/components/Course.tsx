import * as React from 'react'

export const Course = ({name, language, description, price, ageMin, ageMax}) => (
	<div>
		<h1>{name}</h1>
		<div>Language: {language}</div>
		<div>Description: {description}</div>
		<div>Price: {price}</div>
		<div>Age: {ageMin} - {ageMax}</div>
	</div>
);

export default Course
