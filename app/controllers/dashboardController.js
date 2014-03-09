define(['app'], function (app) {

  app.controller('DashboardController', function ($scope, $location, IncidentFactory) {
    IncidentFactory.getIncidents()
      .success(
        function (incidents) {
          $scope.incidents = incidents;
        })
      .error(
        function (error) {
          $scope.status = 'Unable to load customer data: ' + error.message;
        });

    $('#section-nav').addClass('hide');
    //$scope.navIsVisible = false;
    $scope.startIncident = function () {
      IncidentFactory.startIncident(this.incident);
      window.location = "#/incident";
    };
  });

});