//app.factory('WorkLogFactory', function () {
//  var factory = {};
//  var workLogs = [
//    { Id: currentId++, PersonId: 1, IncidentId: 1, HoursWorked: 4, Type: 'Volunteer' }
//  ];

//  factory.getWorkLog = function () {
//    return workLogs;
//  };

//  factory.getWorkLogFor = function (incidentId) {
//    return workLogs[index];
//  }

//  factory.postWorkLog = function (workLog) {
//    var didUpdate = false;
//    for (var i = 0; i <= workLogs.length; i++) {
//      if (workLogs[i].Id == workLog.Id) {
//        workLogs[i] = workLog; // update
//        didUpdate = true;
//        break;
//      }
//    }

//    if (!didUpdate)
//      workLogs.push(workLog); // add
//  };

//  return factory;
//});