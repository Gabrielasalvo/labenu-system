import { User } from "./User"
import { Student } from "./Student"
import { Mission } from "./Mission"
import { FullTimeMisson } from "./FullTimeMission"
import { Teacher } from "./Teacher"
import { TEACHER_SPECIALITY  } from './Teacher'
import *as moment from 'moment'
import { WriteFile } from './WriteFile'





const erikinhaStudent: Student = new Student(1,"Erikinha", "erika@erika.com",moment("10/10/10", "10/10/10"),["Implicar comigo, comer brigadeiro, cantar a grande familia para Ivana"])
// console.log(newStudent)
const ivanaStudent: Student = new Student(1,"Ivana", "ivana@ivana.com",moment("10/10/10", "10/10/10"),["Cuidar da Nina, ser sinistra no JAVA, dormir de madrugada"])
// console.log(newStudent)
const lukeSkywalker: Teacher = new Teacher(2, "Tio Luke Skywalker", "lukesky@forcestrong.com",moment("10/10/10","DD/MM/YY"), [TEACHER_SPECIALITY.BACKEND] )
// console.log(lukeSkywalker)

const leiaOrgana: Teacher = new Teacher(1, "Gerenal Organa", "organa@forcestrong.com",moment("10/10/10", "DD/MM/YY"), [TEACHER_SPECIALITY.REACT, TEACHER_SPECIALITY.REDUX] )
// console.log(leiaOrgana)


const reySkywalker: Teacher = new Teacher(3, "Rey Palpatine Skywalker", "rey@forcestrong.com",moment("10/10/10","DD/MM/YY"), [TEACHER_SPECIALITY.REACT, TEACHER_SPECIALITY.TYPESCRIPT] )
// console.log(reySkywalker)

const finn: Teacher = new Teacher(2187, "Finn FN-2187", "finn@forcestrong.com",moment("10/10/10","DD/MM/YY"), [TEACHER_SPECIALITY.REACT, TEACHER_SPECIALITY.CSS,TEACHER_SPECIALITY.POO ] )
// console.log(finn)


const  classSkywalker: FullTimeMisson = new FullTimeMisson("Pequenos Padawans do Backend","Pequenos Padawans do Backend",moment("10/10/10","DD/MM/YY"),moment("10/10/10","DD/MM/YY"), [lukeSkywalker],[erikinhaStudent], 1)
// console.log(classSkywalker)


const classRavenclaw: FullTimeMisson = new FullTimeMisson("Turma Corvinal", "Hogwarts", moment("10/10/10","DD/MM/YY"),moment("10/10/10","DD/MM/YY"),[lukeSkywalker], [ivanaStudent],3)
// console.log(classRavenclaw)

const novoJSON:WriteFile = new  WriteFile('students.json')
novoJSON.writeJSON(erikinhaStudent)
novoJSON.writeJSON(ivanaStudent)

classRavenclaw.addStudent(ivanaStudent)

