import { prismaDatabaseClient } from '@shared/lib'

import { UserEntity } from '../_domain/types'

export class UserRepository {
  async createUser(user: UserEntity): Promise<UserEntity> {
    return await prismaDatabaseClient.user.create({
      data: user
    })
  }
}

export const userRepository = new UserRepository()
