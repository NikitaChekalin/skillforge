import { privateConfig } from '@shared/config'
import { createId } from '@shared/lib'
import { Nullable } from '@shared/types'

import { ROLES, UserEntity } from '../_domain/types'
import { userRepository } from '../_repositories/user.repository'

type CreateUser = {
  email: string
  name?: Nullable<string>
  image?: Nullable<string>
  emailVerified?: Nullable<Date>
}

export class CreateUserUseCase {
  async exec(data: CreateUser) {
    const adminEmail = privateConfig.ADMIN_EMAIL?.split(',') ?? []
    const role = adminEmail.includes(data.email) ? ROLES.ADMIN : ROLES.USER

    const user: UserEntity = {
      id: createId(),
      role,
      ...data
    }

    return await userRepository.createUser(user)
  }
}

export const createUserUseCase = new CreateUserUseCase()
