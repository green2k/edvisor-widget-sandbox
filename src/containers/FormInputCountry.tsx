import {gql, graphql} from 'react-apollo'
import {connect} from 'react-redux'

import {FormInputCountry, FormInputCountryPropsInterface} from '../components/FormInputCountry'

const QUERY = gql`
	query CountriesQuery {
		countries {
			countryId
			nameTranslation
		}
	}
`

const FormInputCountryWithData = graphql<any, any>(QUERY, {
	props: ({ownProps, data: {loading, countries}}): FormInputCountryPropsInterface => ({
		...ownProps, 
		isLoading: loading, 
		countries:
			(!countries) ? [] : countries.map((country) => ({
				id: country.countryId, 
				name: country.nameTranslation
			}))
	})
})(FormInputCountry)

export default FormInputCountryWithData
