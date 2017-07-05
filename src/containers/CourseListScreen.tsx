import {gql, graphql} from 'react-apollo';
import {connect} from 'react-redux'

import CourseListScreen from '../components/CourseListScreen'

const QUERY = gql`
  query CoursesQuery($studentAge: Int!, $courseLanguage: String!){
    courses(studentAge: $studentAge, courseLanguage: $courseLanguage){
      id, 
      name, 
      language, 
      description, 
      ageMin, 
      ageMax, 
      price
    }
  }
`

const CourseListScreenWithData = graphql<any, any>(QUERY, {
  options: ({ studentAge, courseLanguage }) => ({ variables: {studentAge, courseLanguage} }),
  props: ({ ownProps, data: {loading, courses} }) => ({
    isLoading: loading, 
    courses
  })
})(CourseListScreen)

const CourseListScreenWithDataAndState = connect(
  (state) => ({
    studentAge: state.courseFilter.age, 
    courseLanguage: state.courseFilter.language
  }), 
  (dispatch) => ({})
)(CourseListScreenWithData)

export default CourseListScreenWithDataAndState
