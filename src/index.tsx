import * as React from "react"
import * as ReactDOM from "react-dom"
import {HashRouter} from 'react-router-dom'
import {ApolloClient, createBatchingNetworkInterface, ApolloProvider} from 'react-apollo'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import {courseFiltersReducer} from './reducers/course_filters'
import App from './components/App'

export const widgets = {
	courseSearchWidget: {
		render: (args) => {
			// Build Apollo-NetworkInterface
			const networkInterface = createBatchingNetworkInterface({
				uri: 'http://127.0.0.1:5000/graphql', 
				batchInterval: 10
			})

			// Apollo-NetworkInterface middleware (API authentication using the APY key)
			networkInterface.use([{
				applyBatchMiddleware(req, next) {
					if (!req.options.headers) {
						req.options.headers = {};  // Create the header object if needed.
					}
					req.options.headers.authorization = args.apiKey;
					next();
			  }
			}]);

			// Build Apollo client
			let client = new ApolloClient({
				networkInterface, 
				queryDeduplication: true
			})

			// Create Redux store
			let store = createStore(
				combineReducers({
					courseFilter: courseFiltersReducer, 
					apollo: client.reducer()
				}), 
				window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](), // Initial state
				compose(
					applyMiddleware(client.middleware())
				)
			);

			// Render the application
			ReactDOM.render(
				<ApolloProvider store={store} client={client}>
					<HashRouter>
						<App />
					</HashRouter>
				</ApolloProvider>,
				document.querySelector(args.selector)
			);
		}
	}
}
