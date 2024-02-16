import { CoursesList, CreateCourseForm } from '@features/courses-list'

const CoursesPage = () => {
  return (
    <div className='flex flex-col p-8'>
      <CreateCourseForm revalidatingPagePath='/' className='max-w-[300px] mb-5' />
      <CoursesList revalidationPagePath='/' />
    </div>
  )
}

export default CoursesPage
