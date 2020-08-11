import { User } from "./User"
import *as moment from 'moment'


export enum TEACHER_SPECIALITY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    POO = "POO",
    BACKEND = "BACKEND"


}

export class Teacher implements User {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDay: moment.Moment,
        public specialities: TEACHER_SPECIALITY[]
        
    ) {
        this.id
        this.name
        this.email
        this.birthDay
        this.specialities
        
    }
}