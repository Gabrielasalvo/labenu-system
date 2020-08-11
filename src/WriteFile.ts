import { Student } from './Student'

import  * as fs from 'fs'

export class WriteFile { 
    private jsonName:string
    constructor(jsonName:string){
        this.jsonName = jsonName
    }


    writeJSON(student: Student):void {
        fs.writeFileSync(this.jsonName, JSON.stringify(student,  null, 2))
    }
} 