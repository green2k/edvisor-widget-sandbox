import * as React from 'react'
import * as renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

import {courseFiltersReducer} from '../src/reducers/course_filters'
import Course from '../src/components/Course'

describe('<Course />', () => {
	it('renders', () => {
		const tree = renderer.create(<Course name="Course 1" />).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('renders course name correctly', () => {
		const courseName = 'Sample course name'
		const course = shallow(<Course name={courseName} />)
		expect(course.find('h1').text()).toEqual(courseName)
	})
})

describe('Reducers', () => {
	it('should set filter state correctly', () => {
		const action = {type: 'COURSE_SET_FILTER', age: 99, language: 'English'}
		const state = {}
		const newState = courseFiltersReducer(state, action)

		expect(newState.age).toBe(action.age)
		expect(newState.language).toBe(action.language)
	})
})
