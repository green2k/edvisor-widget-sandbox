import * as React from 'react'

export interface AgencyCardPropsInterface {
	isLoading: boolean;
	name: string;
	phone: string;
	email: string;
}

export const AgencyCard = ({isLoading, name, phone, email}: AgencyCardPropsInterface) => (
	<div>
		<div>{name}</div>
		<div>Phone: {phone}</div>
		<div>Email: {email}</div>
	</div>
);
