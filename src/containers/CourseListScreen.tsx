import {gql, graphql} from 'react-apollo';
import {connect} from 'react-redux'

import CourseListScreen from '../components/CourseListScreen'

const QUERY = gql`
  query OfferingSearchQuery($offeringCourseCategoryIds: [Int!]) {
    offeringSearch(filter: {offeringCourseCategoryIds: $offeringCourseCategoryIds}) {
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
  options: ({ offeringCourseCategoryIds }) => ({ variables: {offeringCourseCategoryIds} }),
  props: ({ ownProps, data: {loading, offeringSearch} }) => ({
    isLoading: loading, 
    courses: (!offeringSearch) ? [] : offeringSearch.map((course) => ({
      id: course.offering.offeringId, 
      name: course.offering.offeringCourse.name, 
      description: "n/a", // Mock
      ageMin: 1, // Mock
      ageMax: 99, // Mock
      price: !(course.price) ? null : course.price.originalPrice
    }))
  })
})(CourseListScreen)

const CourseListScreenWithDataAndState = connect(
  (state) => ({
    offeringCourseCategoryIds: state.courseFilter.courseTypes.map((courseType) => {return courseType.value})
  }), 
  (dispatch) => ({})
)(CourseListScreenWithData)

export default CourseListScreenWithDataAndState
