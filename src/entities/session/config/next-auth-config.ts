import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { privateConfig } from '@shared/config'
import { prismaDatabaseClient } from '@shared/lib'
import { compact } from 'lodash-es'
import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(prismaDatabaseClient),
  providers: compact([
    privateConfig.GITHUB_ID &&
      privateConfig.GITHUB_SECRET &&
      GithubProvider({
        clientId: privateConfig.GITHUB_ID,
        clientSecret: privateConfig.GITHUB_SECRET
      })
  ])
}
