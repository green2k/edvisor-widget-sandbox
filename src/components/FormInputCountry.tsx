import * as React from 'react'

export interface FormInputCountryPropsInterface {
	isLoading: boolean;
	selectedCountryId: number;
	countries: any;
	name: string;
	onChange: (any) => void;
}

export const FormInputCountry = ({isLoading, selectedCountryId, countries, name, onChange}: FormInputCountryPropsInterface) => (
	<select className='form-input-country' name={name} onChange={onChange} defaultValue={selectedCountryId.toString()}>
		{
			(isLoading)
				? <option value="test" onChange={onChange}>Loading countries...</option>
				: (countries.map(country => (
					<option key={country.id} value={country.id}>{country.name}</option>
				)))
		}
	</select>
)

export default FormInputCountry
