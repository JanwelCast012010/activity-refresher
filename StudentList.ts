import { Student } from "./Student";

export class StudentList {
    students: Array<Student>;
    constructor(students: Array<Student>) {
        this.students = students
    }
    getStudents() {
        return this.students;
    }
    updateStudentName(id: string, name: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];
                if (element.studentId === id) {
                    element.name = name;
                    return element;
                }
            }
        }
        return "Student id doesnt exists";
    }
    checkStudentId(id: string) {
        let checkStudent = this.students.find(element => element.studentId === id);
        if (checkStudent) return true;
        return false;
    }
    updateAge(id: string, age: number) {
        let student = this.students.find(element => element.studentId === id);
        if (student) {
            student.age = age;
            return student;
        }
        return "Student id doesnt exists";
    }
    numberOfStudents(){
        const count = this.students.length
        return `Count: ${count}`
}
    removeStudent(id: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];
                if (element.studentId === id) {
                    this.students.splice(index, index)
                    return element;
            }
        }
    }
    }
    updateCollege(id: string, newCollegeName: string) {
        let student = this.students.find(element => element.studentId === id);
        if (student) {
            student.college = newCollegeName;
            return student;
        }
        return "Student id doesnt exists";
    }
    updateAddress(id: string, newAddress: string) {
        let student = this.students.find(element => element.studentId === id);
        if (student) {
            student.address = newAddress;
            return student;
        }
        return "Student id doesnt exists";
    }
    updateCourse(id: string, newCourse: string) {
        let student = this.students.find(element => element.studentId === id);
        if (student) {
            student.course = newCourse;
            return student;
        }
        return "Student id doesnt exists";
    }
    updateGender(id: string, newGender: string) {
        let student = this.students.find(element => element.studentId === id);
        if (student) {
            student.gender = newGender;
            return student;
        }
        return "Student id doesnt exists";
    }
}
