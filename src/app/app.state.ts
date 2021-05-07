import { Test } from './interfaces/test.interface'
import { MyRequest } from './interfaces/my-request.interface'
export interface AppState {
    readonly test: Test[];
    readonly myRequest: MyRequest[];
}


