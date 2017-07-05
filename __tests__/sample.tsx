import * as React from 'react'
import * as TestUtils from 'react-addons-test-utils'

import Course from '../src/components/Course'

describe('<Course />', () => {
  it('renders', () => {
    expect(TestUtils.createRenderer().render(
      <Course name="Course 1" />
    )).toMatchSnapshot()
  })
});
