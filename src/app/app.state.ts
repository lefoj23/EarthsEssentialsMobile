import { Test } from './interfaces/test.interface'
import { MyRequest } from './interfaces/my-request.interface'
import { Claims } from './interfaces/claims.interface'

export interface AppState {
    readonly test: Test[];
    readonly myRequest: MyRequest[];
    readonly claims: Claims[];
}


