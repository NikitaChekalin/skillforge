'use server'

import { revalidatePath } from 'next/cache'

import { coursesRepository } from './courses-repository'

interface CreateCourseAction {
  revalidatingPagePath: string
  command: CreateCourseListElementCommand
}

export const createCourseAction = async ({ revalidatingPagePath, command }: CreateCourseAction) => {
  await coursesRepository.createCourseElement(command)
  revalidatePath(revalidatingPagePath)
}
