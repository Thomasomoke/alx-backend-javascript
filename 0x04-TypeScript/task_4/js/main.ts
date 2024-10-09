// Define the Subject classes with required methods
class Subject {
  teacher: Teacher | null = null;
  
  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return 'Here are the requirements';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingC) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return 'No available teacher';
    }
  }
}

// Define the Cpp, Java, and React classes extending Subject
class Cpp extends Subject {
  getRequirements(): string {
    return 'C++ Requirements';
  }
}

class Java extends Subject {
  getRequirements(): string {
    return 'Java Requirements';
  }
}

class React extends Subject {
  getRequirements(): string {
    return 'React Requirements';
  }
}

// Define the Teacher interface and object
interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC?: number;
}

const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Exporting the constants for the subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Setting the teacher and logging results for Cpp
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Setting the teacher and logging results for Java
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Setting the teacher and logging results for React
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

