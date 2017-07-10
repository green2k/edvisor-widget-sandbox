import * as React from 'react'

export const AgencyCard = ({isLoading, name, phone, email}) => (
	<div>
		<div>{name}</div>
		<div>Phone: {phone}</div>
		<div>Email: {email}</div>
	</div>
);

export default AgencyCard
