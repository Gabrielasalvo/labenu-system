"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.TEACHER_SPECIALITY = void 0;
var TEACHER_SPECIALITY;
(function (TEACHER_SPECIALITY) {
    TEACHER_SPECIALITY["REACT"] = "REACT";
    TEACHER_SPECIALITY["REDUX"] = "REDUX";
    TEACHER_SPECIALITY["CSS"] = "CSS";
    TEACHER_SPECIALITY["TESTES"] = "TESTES";
    TEACHER_SPECIALITY["TYPESCRIPT"] = "TYPESCRIPT";
    TEACHER_SPECIALITY["POO"] = "POO";
    TEACHER_SPECIALITY["BACKEND"] = "BACKEND";
})(TEACHER_SPECIALITY = exports.TEACHER_SPECIALITY || (exports.TEACHER_SPECIALITY = {}));
class Teacher {
    constructor(id, name, email, birthDay, specialities) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.specialities = specialities;
        this.id;
        this.name;
        this.email;
        this.birthDay;
        this.specialities;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map