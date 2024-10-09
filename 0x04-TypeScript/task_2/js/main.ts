interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}

	getCoffeeBreak():string {
		return "Getting a coffee break";
	}
	workDirectorTasks():string {
		return "Getting to director tasks";
	}

class Teacher implements TeacherInterface {
	workFromHome():string {
		return "Cannot work from home";
	}
	getToWork():string {
		return "Cannot have a break";
	}
	workTeacherTasks():string {
		return "Getting to work";
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

interface DirectorInterface {
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workTeacherTasks(): string;
}

type Employee = DirectorInterface | TeacherInterface;

function isDirector(employee: Employee): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

function createEmployee(salary: number): Employee {
  if (salary > 500) {
    return {
      workDirectorTasks: () => 'Getting to director tasks',
    };
  } else {
    return {
      workTeacherTasks: () => 'Getting to work',
    };
  }
}

function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}



	


