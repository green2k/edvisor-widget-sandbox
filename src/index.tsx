import * as React from "react"
import * as ReactDOM from "react-dom"
import {MemoryRouter} from 'react-router-dom'
import {ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import {courseFiltersReducer} from './reducers/course_filters'
import App from './components/App'

// Build Apollo client
let client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'http://127.0.0.1:4000/graphql'
	})
})

// Create Redux store
let store = createStore(
	combineReducers({
		courseFilter: courseFiltersReducer, 
		apollo: client.reducer()
	}), 
	{}, // Initial state
	compose(
		applyMiddleware(client.middleware())
	)
);

// Render the application
ReactDOM.render(
	<ApolloProvider store={store} client={client}>
		<MemoryRouter>
			<App />
		</MemoryRouter>
	</ApolloProvider>,
	document.getElementById("root")
);
