export const setCourseFilter = (age: number, language: string, courseTypes: any) => {
  return {
    type: 'COURSE_SET_FILTER',
    age, 
    language, 
    courseTypes
  }
}
