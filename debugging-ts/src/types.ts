import type { UserDoc } from './models/user.js'

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
        export interface Request {
            user?: UserDoc | null,
            roles?: Role[]
            authUser?: UserDoc | null
        }
    }
}

export type Role = 'admin' | 'business' | 'user'
