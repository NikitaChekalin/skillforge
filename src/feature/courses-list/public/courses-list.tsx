import { revalidatePath } from 'next/cache'

import { coursesRepository } from '../courses-repository'
import { CourseItem } from '../ui/course-item'

interface CoursesList {
  revalidationPagePath: string
}

export const CoursesList = async ({ revalidationPagePath }: CoursesList) => {
  const coursesList = await coursesRepository.getCoursesList()

  const handleDelete = async (courseId: string) => {
    'use server'

    await coursesRepository.deleteCourseElement({ id: courseId })

    await revalidatePath(revalidationPagePath)
  }

  return (
    <div className='flex flex-col gap-3'>
      {coursesList.map((course) => (
        <CourseItem key={course.id} course={course} onDelete={handleDelete.bind(null, course.id)} />
      ))}
    </div>
  )
}
