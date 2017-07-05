import {connect} from 'react-redux'

import {setCourseFilter} from '../actions'
import CourseFilterScreen from '../components/CourseFilterScreen'

const mapStateToProps = (state) => {
  return {
    age: state.courseFilter.age, 
    language: state.courseFilter.language
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (age: number, language: string) => {
      dispatch(setCourseFilter(age, language))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseFilterScreen)

export default container
