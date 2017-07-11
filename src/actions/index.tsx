export const setCourseFilter = (age: number, countryId: number, language: string, courseTypes: any) => {
  return {
    type: 'COURSE_SET_FILTER',
    age, 
    countryId, 
    language, 
    courseTypes
  }
}
