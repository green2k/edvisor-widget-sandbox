import {gql, graphql} from 'react-apollo';
import {connect} from 'react-redux'

import {CourseListScreen, CourseListScreenPropsInterface} from '../components/CourseListScreen'

const QUERY = gql`
  query OfferingSearchQuery($studentAge: Int!, $offeringCourseCategoryIds: [Int!]) {
    offeringSearch(filter: {age: {eq: $studentAge}, offeringCourseCategoryIds: $offeringCourseCategoryIds}) {
      durationAmount, 
      durationType {
        durationTypeId
        codeName
      }, 
      price {
        originalPrice
      }, 
      offering {
        offeringId, 
        reqMinAge, 
        reqMaxAge, 
        offeringCourse {
          offeringCourseCategoryId, 
          offeringCourseCategory {
            codeName
          }, 
          name
        }
      }
    }
  }
`

const CourseListScreenWithData = graphql<any, any>(QUERY, {
  options: ({ studentAge, offeringCourseCategoryIds }) => ({ variables: {studentAge, offeringCourseCategoryIds} }),
  props: ({ ownProps, data: {loading, offeringSearch} }): CourseListScreenPropsInterface => ({
    isLoading: loading, 
    courses: (!offeringSearch) ? [] : offeringSearch.map((course) => ({
      id: course.offering.offeringId, 
      name: course.offering.offeringCourse.name, 
      description: "n/a", // Mock
      ageMin: course.offering.reqMinAge, 
      ageMax: course.offering.reqMaxAge, 
      price: !(course.price) ? null : course.price.originalPrice
    }))
  })
})(CourseListScreen)

const CourseListScreenWithDataAndState = connect(
  (state) => ({
    offeringCourseCategoryIds: state.courseFilter.courseTypes.map((courseType) => {return courseType.value}), 
    studentAge: state.courseFilter.age
  }), 
  (dispatch) => ({})
)(CourseListScreenWithData)

export default CourseListScreenWithDataAndState
