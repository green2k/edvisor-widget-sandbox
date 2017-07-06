import * as React from "react"
import * as ReactDOM from "react-dom"
import {MemoryRouter} from 'react-router-dom'
import {ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import {courseFiltersReducer} from './reducers/course_filters'
import App from './components/App'

const networkInterface = createNetworkInterface({
	uri: 'http://127.0.0.1:5000/graphql'
})

networkInterface.use([{
	applyMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {};  // Create the header object if needed.
		}
		req.options.headers.authorization = 'agent';
		next();
  }
}]);

// Build Apollo client
let client = new ApolloClient({networkInterface})

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

export const widgets = {
	courseSearchWidget: {
		render: (args) => {
			// Render the application
			ReactDOM.render(
				<ApolloProvider store={store} client={client}>
					<MemoryRouter>
						<App />
					</MemoryRouter>
				</ApolloProvider>,
				document.querySelector(args.selector)
			);
		}
	}
}
