import { Mission } from "./Mission";
import * as moment from "moment";
import { Teacher } from "./Teacher";
import { Student } from "./Student";


export class FullTimeMisson extends Mission {
  constructor(
    name: string,
    classId: string,
    startDate: moment.Moment,
    endDate: moment.Moment,
    teachers: Teacher[] = [],
    students: Student[] = [],
    module: number | undefined = undefined
  ) {
    super(classId, startDate, endDate, teachers, students, module);
  }
}
