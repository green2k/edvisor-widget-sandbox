import * as React from 'react'

export interface CoursePropsInterface {
	id: number;
	name: string;
	description: string;
	price: number;
	ageMin: number | '*';
	ageMax: number | '*';
}

export const Course = ({id, name, description, price, ageMin, ageMax}: CoursePropsInterface) => (
	<div>
		<h1>{name}</h1>
		<div>Description: {description}</div>
		<div>Price: {price}</div>
		<div>Required age: {ageMin} - {ageMax}</div>
	</div>
);
