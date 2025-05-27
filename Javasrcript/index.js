
function Student(name, age, mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;
}

const studentOne = new Student('Elon', 50, 98);
const studentTwo = new Student('Mark', 37, 97);
console.log(studentOne,studentTwo);
