export class Leave {
    id: string;
    fullName: string;
    appliedLeaves: [EmployeeLeave];
}

export class EmployeeLeave {
    id: string;
    startDate: string;
    endDate: string;
    days: number;
    leaveType: string;
    leaveReason: string;
    status: string;
    appliedOn?: Date;
    managerComments?: string;
}
