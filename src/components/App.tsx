import * as React from "react";
import {Route} from 'react-router-dom'

import CourseFilterScreen from "../containers/CourseFilterScreen"
import CourseListScreen from "../containers/CourseListScreen"
import AgencyCard from "../containers/AgencyCard"

// Top-parent component
const App = () => (
	<div>
		<Route exact path='/' component={CourseFilterScreen} />
		<Route exact path='/search' component={CourseListScreen} />
		<hr />
		<AgencyCard />
	</div>
);

export default App
