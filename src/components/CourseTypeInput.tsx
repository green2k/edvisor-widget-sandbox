import * as React from 'react';

import {MultiSelect} from 'react-selectize'

const CourseTypeInput = ({defaultValues, onChange}) => {
	const options = [
		{value: "GENERAL_ENGLISH", label: "General English"}, 
		{value: "BUSINESS_ENGLISH", label: "Business English"}, 
		{value: "ACADEMIC_ENGLISH", label: "Academic English"}
	]

	return (
		<MultiSelect
			options={options}
			placeholder="Select a course type"
			defaultValues={defaultValues}
			onValuesChange={value => {onChange(value)}} />
	);
}

export default CourseTypeInput
