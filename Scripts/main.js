require.config({ baseUrl: '/app', urlArgs: 'v=1.0' });

require(
  [
    'app',
    'factories/incidentFactory',
    'controllers/dashboardController',
    'controllers/incidentController'
  ],
  function () {
    angular.bootstrap(document, ['salvationArmyApp']);
  });