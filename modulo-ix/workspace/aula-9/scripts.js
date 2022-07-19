/* Atribuição de um Objeto em JavaScript */
"use strict"
class Course {
    code;
    title;
    teacher;
    constructor(code, title, teacher) {
        this.code = code;
        this.title = title;
        this.teacher = teacher;
    }
}

const myCourse1 = new Course(456, "English", "Anna");
console.log(myCourse1);

const myCourse2 = myCourse1; // Os abjetos apontam para o mesmo endereço.

myCourse2.code = 789;
myCourse2.title = "Math";
myCourse2.teacher = "Joe";

console.log(myCourse1);