'use client'

import { useTransition } from 'react'

import { Button } from '@/shared/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'

type CourseItem = {
  course: CourseListElement
  onDelete: () => Promise<void>
}

export const CourseItem = ({ course, onDelete }: CourseItem) => {
  const [isLoadingDeleting, setDeleteTransition] = useTransition()

  const handleDelete = () => {
    setDeleteTransition(async () => await onDelete())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button disabled={isLoadingDeleting} onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
