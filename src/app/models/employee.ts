import { Leave } from "./leave";


export class Employee {
	empId: number;
    empName: string;
	empPhone: string;
	empDept: string;
    empEmail: string;
	empDoj: Date;
	leaveBalance: number;
	empManagerId: number;
	appliedLeaves : Leave[] = [];
};