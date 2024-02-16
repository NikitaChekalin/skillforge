import { CoursesList, CreateCourseForm } from '@features/courses-list'

const Home = async () => {
  return (
    <main className='flex min-h-screen flex-col p-8'>
      <CreateCourseForm revalidatingPagePath='/' className='max-w-[300px] mb-5' />
      <CoursesList revalidationPagePath='/' />
    </main>
  )
}

export default Home
