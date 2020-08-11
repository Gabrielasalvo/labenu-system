"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const moment = require("moment");
class Student {
    constructor(id, name, email, birthDay, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDay = birthDay;
        this.hobbies = hobbies;
    }
    getAge() {
        return moment().diff(this.birthDay, "years");
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map