var express = require('express');
var router = express.Router();

var Employee = require('../models/leave.server.model');

router.get('/', function (req, res, next) {
  res.send('Initialized the new schem..');
});

router.get('/viewLeave', function (req, res, next) {
  var id = "5c241898ac5c7a91a5ffe8f9";
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

  var id = "5c241898ac5c7a91a5ffe8f9";
  //var query = Employee.findById(id);

  Employee.findById(id).exec(function (err, doc) {
    if (err) return res.status(500).json({ error: err });
    else {
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
