var express = require('express');
var router = express.Router();

var Employee = require('../models/leave.server.model');

//console.log(Employee)

router.get('/', function (req, res, next) {
  res.send('Initialized the new schema..');
});

router.get('/viewLeave', function (req, res, next) {
  var id = "5c241921ac5c7a91a5ffe93c";
  //var query = Employee.findById(id);

  Employee.findById(id).exec(function (err, doc) {
    if (err) return res.status(500).json({ error: err });
    else return res.status(200).json(doc);
  });
});

router.post('/applyLeave', function (req, res) {
  var startDate = req.body.startDate;
  var endDate = req.body.endDate;
  var leaveType = req.body.leaveType;
  var leaveReason = req.body.leaveReason;

  var leave = {
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    days: req.body.days,
    leaveType: req.body.leaveType,
    leaveReason: req.body.leaveReason,
    managerComments: '',
    status: 'Applied'
  };

  var id = "5c241921ac5c7a91a5ffe93c";
  //var query = Employee.findById(id);
  //console.log(query)

  Employee.findById(id).exec(function (err, doc) {
    if (err) return res.status(500).json({ error: err });
    else {
      console.log(id)
      console.log(doc)
      //doc.appliedLeaves = [];
      //doc.appliedLeaves = 0;
      doc.appliedLeaves.push(leave);
      doc.leaveBalance = doc.leaveBalance - 1;

      doc.save(function (err, doc) {
        if (err) return res.json({ error: err });
        else return res.status(200).json({ msg: 'Successfully saved!!' });
      });
    }
  });
});

module.exports = router;
