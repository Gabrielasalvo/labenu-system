"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeMisson = void 0;
const Mission_1 = require("./Mission");
class FullTimeMisson extends Mission_1.Mission {
    constructor(name, classId, startDate, endDate, teachers = [], students = [], module = undefined) {
        super(classId, startDate, endDate, teachers, students, module);
    }
}
exports.FullTimeMisson = FullTimeMisson;
//# sourceMappingURL=FullTimeMission.js.map