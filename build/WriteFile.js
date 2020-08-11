"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteFile = void 0;
const fs = require("fs");
class WriteFile {
    constructor(jsonName) {
        this.jsonName = jsonName;
    }
    writeJSON(student) {
        fs.writeFileSync(this.jsonName, JSON.stringify(student, null, 2));
    }
}
exports.WriteFile = WriteFile;
//# sourceMappingURL=WriteFile.js.map