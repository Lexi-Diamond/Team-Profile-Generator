const Employee = require("./employee")

class Engeineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub
    }
    getRole() {
        return 'Engeineer'
    }
    getGithub() {
        return this.gitHub
    }
}
module.exports = Engieneer