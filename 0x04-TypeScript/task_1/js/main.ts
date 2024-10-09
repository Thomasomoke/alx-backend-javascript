interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[property: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;

const director1: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	numberOfReports: 17,
	location: 'London',
	contract: false,
};

console.log(director1);

function printTeacher{firstName: string, lastName:string}: string {
	return `${firstNmae[0]} ${lastName}`;
}

printTeacher("John", "Doe");

