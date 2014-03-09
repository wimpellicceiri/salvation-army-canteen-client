/*################################################
  Walt Impellicceiri
#################################################*/

define([], function () {

  var app = angular.module('salvationArmyApp', ['ngRoute']);

  app.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
    function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {

      app.register =
        {
          controller: $controllerProvider.register,
          directive: $compileProvider.directive,
          filter: $filterProvider.register,
          factory: $provide.factory,
          service: $provide.service
        };

      app.serviceBase = "http://salvationarmywebapi.azurewebsites.net/api/";

      $routeProvider.when('/',
      {
        controller: 'DashboardController',
        templateUrl: 'app/views/Dashboard.html'
        //templateUrl: 'views/TimeLog.html'
      })
      //.when('/incidents',
      //{
      //  controller: 'IncidentController',
      //  templateUrl: 'views/incidents.html'
      //})
      .when('/incident',
      {
        controller: 'IncidentController',
        templateUrl: 'app/views/Incident.html'
      })
      .when('/truck',
      {
        controller: 'IncidentController',
        templateUrl: 'app/views/Truck.html'
      })
      .when('/people',
      {
        controller: 'IncidentController',
        templateUrl: 'app/views/People.html'
      })
      .when('/time',
      {
        controller: 'IncidentController',
        templateUrl: 'app/views/Time.html'
      })
      .when('/inventory',
      {
        controller: 'IncidentController',
        templateUrl: 'app/views/Inventory.html'
      }).otherwise({ redirectTo: '/' });

    }]);

    return app;
});