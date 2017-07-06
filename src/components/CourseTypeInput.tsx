import * as React from 'react';

import {MultiSelect} from 'react-selectize'

const CourseTypeInput = ({options, defaultValues, isLoading, onChange}) => {
	return (
		(isLoading)
			? <div>Loading course types..</div>
			: <MultiSelect
				options={options}
				placeholder="Select a course type"
				defaultValues={defaultValues}
				onValuesChange={value => {onChange(value)}} />
	);
}

export default CourseTypeInput
