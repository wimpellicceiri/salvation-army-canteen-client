define(['app'], function (app) {

  app.controller('IncidentController', function ($scope, IncidentFactory) {
    //$scope.navIsVisible = true;
    $('#section-nav').removeClass('hide');
    $('#footerContainer').removeClass('hide');

    $scope.currentIncident = IncidentFactory.currentIncident;
    currentIncident = $scope.currentIncident;
    //IncidentFactory.getIncidents().success(function (incidents) {
    //  $scope.currentIncident = incidents[incidents.length - 1];
    //}).error(function () {
    //  alert('oh no');
    //});

    $scope.menuItems = [{ Id: 1, Name: 'Coffee', Units: 'Pot' }, { Id: 2, Name: 'Cookies', Units: 'Package' }];

    $scope.addIncident = function () {
      IncidentFactory.addIncident($scope.currentIncident)
                     .success(function () {
                       alert('success');
                     })
                     .error(function (error) {
                       alert(error);
                     });
    };

    $scope.updateIncident = function () {
      IncidentFactory.updateIncident($scope.currentIncident)
                     .success(function () {
                       alert('success');
                     })
                     .error(function (error) {
                       alert(error);
                     });
    };

    $scope.incrementQuantity = function () {
      if (!this.itemServed.Quantity)
        this.itemServed.Quantity = 0;

      this.itemServed.Quantity++;
    };
    $scope.decrementQuantity = function () {
      if (!this.itemServed.Quantity)
        this.itemServed.Quantity = 0;

      if (this.itemServed.Quantity > 0)
        this.itemServed.Quantity--;
    };
    $scope.finishIncident = function () {
      alert('here');
      $('#myModal').modal('hide');
    };
  });

});