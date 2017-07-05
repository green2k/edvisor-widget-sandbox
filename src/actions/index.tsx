export const setCourseFilter = (age: number, language: string) => {
  return {
    type: 'COURSE_SET_FILTER',
    age, 
    language
  }
}
