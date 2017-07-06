export const courseFiltersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'COURSE_SET_FILTER':
      return {
        ...state, 
        age: action.age, 
        language: action.language, 
        courseTypes: action.courseTypes
      };
    default:
      return state;
  }
}
