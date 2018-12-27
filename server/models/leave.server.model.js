var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var statusTypes = ['Applied', 'Approved', 'Denied'];

//Leave object
var leaveSchema = new Schema ({
	startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    days: { type: Number, required: true },
	leaveType: { type: String, required: true },
	leaveReason: { type: String, required: true },
	appliedOn: { type: Date, default: Date.now() },
    managerComments: String,
	status: { type: String, required: true, enum: statusTypes}
});

var employeeSchema = new Schema ({
	fullName: String,
    email: String,
	userName: String,
	password: String,
    mobile: String,
    doj: Date,
    department: String,
	managerId: Number,
	leaveBalance: { type: Number, min: 0 },
	appliedLeaves : [leaveSchema]
});

module.exports = mongoose.model('Employees', employeeSchema);