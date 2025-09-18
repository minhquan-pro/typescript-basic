// 1. Static typing

// 2. Type any
let userName: any;
userName: "Hello";
userName: 12;

//--------------------------------------------------------------------------------------------------

// 3. Kiểu dữ liệu cơ bản: string, number, boolean
let catName: string;
let catAge: number;
let isCute: boolean;

catName = "MEO MEO";
catAge = 23;
isCute = true;

//--------------------------------------------------------------------------------------------------

// 4. Array

// Cách 1:
let ratings: number[] = [1, 2, 3, 4];
let cities: string[] = ["HN", "HCM", "DN"];
let matrix: number[][] = [
	[1, 2],
	[2, 3],
];

// Cách 2:
let ratings2: Array<number> = [1, 2, 3, 4];
let cities2: Array<string> = ["HN", "HCM", "DN"];
let matrix2: Array<Array<number>> = [
	[1, 2],
	[2, 3],
];

// --------------------------------------------------------------------------------------------------

// 5. Function and void
function sayHi(): string {
	return "Hello, My name is Q";
}
function double(number: number): number {
	return number * 2;
}
// Optional arg (?)
function greet(name: string, title?: string) {}

//--------------------------------------------------------------------------------------------------

// 6. Type aliases
type Customer = {
	id: number;
	name: string;
};
type UserResponse = {
	success: boolean;
	message: string;
};
function greetCustomer(customer: Customer): UserResponse {
	return {
		success: true,
		message: "HELLO EVERYBODY",
	};
}

// NOTE: Khi khai báo 2 type cùng tên sẽ bị báo lỗi ngay;

//--------------------------------------------------------------------------------------------------

// 7. Union & Literal types

// Union type
type UserId = number | string; //Union
function getTicketInfo(id: UserId) {
	if (typeof id === "string") {
		return `THIS IS STRING ${id}`;
	}

	if (typeof id === "number") {
		return `THIS IS NUMBER ${id}`;
	}
}
const mixedArray: (string | number)[] = [1, 2, 3, 4, "red", "green"];

// Literal type
type UserType2 = {
	userName: string;
	age: number;
	phone: string;
	theme: "dark" | "light"; // Literal type
};

//--------------------------------------------------------------------------------------------------

// 8. Intersection type (Tính kế thừa)
type Person = {
	name: string;
};

type userWorker = {
	job: string;
};

type Employee = Person & userWorker;

const e1: Employee = {
	name: "Be",
	job: "Teacher",
};

// Never type

//--------------------------------------------------------------------------------------------------

// 9. interface
interface IUser {
	name: string;
	email: string;
	age: number;
}

const user: IUser = {
	name: "Be",
	email: "abc@gmail.com",
	age: 22,
};

// inheritance (Tính kế thừa)

interface IUser {
	name: string;
	age: number;
}

interface IEmployee {
	job: string;
	salary: number;
}

interface IStaff extends IUser, IEmployee {
	department: string;
}

const staff1: IStaff = {
	name: "Be",
	age: 22,
	job: "Dev",
	salary: 3000,
	department: "QA",
	email: "abc@gmail.com",
};

//--------------------------------------------------------------------------------------------------

// 10. Generics

interface IPost<T> {
	id: number;
	title: string;
	des: string;
	extra: T[];
}

interface IAuthor {
	name: string;
	age: number;
}

const postWithAuthor: IPost<IAuthor> = {
	id: 1,
	title: "HELLO THIS IS POST",
	des: "THIS IS POST.....",
	extra: [
		{
			name: "Be",
			age: 23,
		},
		{
			name: "Bob",
			age: 25,
		},
	],
};
