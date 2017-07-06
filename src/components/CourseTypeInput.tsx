import * as React from 'react';

import {MultiSelect} from 'react-selectize'

const CourseTypeInput = ({options, defaultValues, onChange}) => {
	return (
		<MultiSelect
			options={options}
			placeholder="Select a course type"
			defaultValues={defaultValues}
			onValuesChange={value => {onChange(value)}} />
	);
}

export default CourseTypeInput
