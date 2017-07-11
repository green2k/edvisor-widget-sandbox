import {gql, graphql} from 'react-apollo'
import {connect} from 'react-redux'

import {AgencyCard, AgencyCardPropsInterface} from '../components/AgencyCard'

const QUERY = gql`
  query AgencyQuery {
    agencyCompany {
      name, 
      phone, 
      email
    }
  }
`

const AgencyCardWithData = graphql<any, any>(QUERY, {
	props: ({ownProps, data: {loading, agencyCompany}}): AgencyCardPropsInterface => ({
		isLoading: loading, 
		name: agencyCompany ? agencyCompany.name : null, 
		phone: agencyCompany ? agencyCompany.phone : null, 
		email: agencyCompany ? agencyCompany.email : null
	})
})(AgencyCard)

export default AgencyCardWithData
