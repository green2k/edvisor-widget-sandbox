import {gql, graphql} from 'react-apollo';
import {connect} from 'react-redux'

import {setCourseFilter} from '../actions'
import CourseFilterScreen from '../components/CourseFilterScreen'

const QUERY = gql`
  query CourseCategoriesQuery {
    offeringCourseCategories {
      offeringCourseCategoryId, 
      codeName
    }
  }
`

const CourseFilterScreenWithData = graphql<any, any>(QUERY, {
  props: ({ ownProps, data: {loading, offeringCourseCategories} }) => ({
    isLoading: loading, 
    courseTypesAll: (!offeringCourseCategories) ? [] : offeringCourseCategories.map((courseType) => ({
      value: courseType.offeringCourseCategoryId, 
      label: courseType.codeName
    }))
  })
})(CourseFilterScreen)

const mapStateToProps = (state) => {
  return {
    age: state.courseFilter.age, 
    language: state.courseFilter.language, 
    courseTypes: state.courseFilter.courseTypes, 
    countryId: state.courseFilter.countryId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (age: number, countryId: number, language: string, courseTypes: any) => {
      dispatch(setCourseFilter(age, countryId, language, courseTypes))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseFilterScreenWithData)

export default container
