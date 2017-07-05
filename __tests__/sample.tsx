import * as React from 'react'
import * as renderer from 'react-test-renderer';

import Course from '../src/components/Course'

describe('<Course />', () => {
  it('renders', () => {
  	const tree = renderer.create(<Course name="Course 1" />).toJSON()
  	expect(tree).toMatchSnapshot()
  })
});
