interface student {
        firstName: string;
        lastName: string;
        age: number;
        location: string;
}

const stu1: student = {
        firstName: 'Thomas',
        lastName: 'Omoke',
        age: 23,
        location: 'Mombasa'
}

const stu2: student = {
        firstName: 'Hillan',
        lastName: 'Boyani',
        age: 25,
        location: 'Nairobi'
}

const studentsList: student[] = [ stu1, stu2];

