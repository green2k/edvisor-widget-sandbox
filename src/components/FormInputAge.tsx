import * as React from 'react'

interface FormInputAgePropsInterface {
	name: string;
	value: number;
	onChange: (any) => void;
}

export const FormInputAge = ({name, value, onChange}: FormInputAgePropsInterface) => (
	<input
		className='form-input-age'
		name={name}
		type='number'
		value={value}
		onChange={onChange} />
);

export default FormInputAge
