import * as moment from 'moment'


export interface User{
    id: number
    name: string
    email: string
    birthDay: moment.Moment

}
