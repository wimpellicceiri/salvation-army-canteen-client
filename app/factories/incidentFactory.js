define(['app'], function (app) {

  app.factory('IncidentFactory', ['$http', function ($http) {
    var factory = {};
    //var incidents = [
    //  { Id: 1, Unit: 1, StartDate: new Date(2014, 2, 22, 10, 0, 0), StartMileage: 75000, EndDate: new Date(2014, 2, 22, 11, 0, 0), EndMileage: 75005, EndFuelLevel: 0.5, EndWaterLevel: 0.25, Type: 'Fire', DriverName: 'Walt', RedCrossReferral: true }
    //];

    factory.getIncidents = function () {
      return $http.get(app.serviceBase + 'incident');
    };

    factory.getIncidentAt = function (index) {
      return $http.get(app.serviceBase + 'incident/' + index);
    };

    factory.addIncident = function (incident) {
      return $http.post(app.serviceBase + 'incident', incident);
    };

    factory.updateIncident = function (incident) {
      return $http.put(app.serviceBase + 'incident/' + 1, incident);
    };

    factory.startIncident = function (incident) {
      if (typeof (incident) == 'undefined')
        incident = {};

      factory.currentIncident = incident;
    };

    return factory;
  }]);

});