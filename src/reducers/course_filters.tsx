import {AppStoreState} from '../types'

export const courseFiltersReducer = (state: AppStoreState = {}, action): AppStoreState => {
  switch (action.type) {
    case 'COURSE_SET_FILTER':
      return {
        ...state, 
        age: action.age, 
        language: action.language, 
        courseTypes: action.courseTypes, 
        countryId: action.countryId
      };
    default:
      return state;
  }
}
