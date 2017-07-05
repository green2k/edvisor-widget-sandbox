import * as React from 'react';

import {MultiSelect} from 'react-selectize'

const CourseTypeInput = ({onChange}) => {
	const options = [
		{value: "GENERAL_ENGLISH", label: "General English"}, 
		{value: "BUSINESS_ENGLISH", label: "Business English"}, 
		{value: "ACADEMIC_ENGLISH", label: "Academic English"}
	]

	return (
		<MultiSelect
			options={options}
			placeholder="Select a course type"
			onValuesChange={
				value => {
					onChange(
						value.map(
							(o) => ({
								type: o.value, 
								label: o.label
							})
						)
					)
				}
			} />
	);
}

export default CourseTypeInput
