"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
class Mission {
    constructor(classId, startDate, endDate, teachers = [], students = [], module = undefined) {
        this.classId = classId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.module = module;
        this.name = "";
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.startDate;
    }
    getId() {
        return this.classId;
    }
    getName(name) {
        return this.name;
    }
    addStudent(student) {
        return this.students.push(student);
    }
    setName(name) {
        this.name = name;
    }
    getCurrentModule() {
        if (this.module) {
            return this.module;
        }
        else {
            return undefined;
        }
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map