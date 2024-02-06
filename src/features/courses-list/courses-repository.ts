import { cache } from 'react'

import { prismaDatabaseClient } from '@/shared/lib'

class CoursesRepository {
  getCoursesList = cache((): Promise<CourseListElement[]> => prismaDatabaseClient.course.findMany())

  createCourseElement = (command: CreateCourseListElementCommand): Promise<CourseListElement> => {
    return prismaDatabaseClient.course.create({ data: command })
  }

  deleteCourseElement = (command: DeleteCourseListElementCommand) => {
    return prismaDatabaseClient.course.delete({ where: { id: command.id } })
  }
}

export const coursesRepository = new CoursesRepository()
