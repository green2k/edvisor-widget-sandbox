import {connect} from 'react-redux'

import {setCourseFilter} from '../actions'
import CourseFilterScreen from '../components/CourseFilterScreen'

const mapStateToProps = (state) => {
  return {
    age: state.courseFilter.age, 
    language: state.courseFilter.language, 
    courseTypes: state.courseFilter.courseTypes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (age: number, language: string, courseTypes: any) => {
      dispatch(setCourseFilter(age, language, courseTypes))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseFilterScreen)

export default container
