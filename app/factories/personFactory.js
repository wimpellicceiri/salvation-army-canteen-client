//app.factory('PersonFactory', function () {
//    var factory = {};
//    var persons = [
//      { Id: 1, Name: 'Shannon Impellicceiri' },
//      { Id: 2, Name: 'Walt Impellicceiri' },
//      { Id: 3, Name: 'Alex Scuito' }
//    ];

//    factory.getPersons = function () {
//      return persons;
//    };

//    factory.postPerson = function (person) {
//      var didUpdate = false;
//      for (var i = 0; i <= persons.length; i++) {
//        if (persons[i].Id == person.Id) {
//          person[i] = person; // update
//          didUpdate = true;
//          break;
//        }
//      }

//      if (!didUpdate)
//        persons.push(person); // add
//    };

//    return factory;
//  }).controller('PersonController', function ($scope, PersonFactory) {
//    $scope.persons = PersonFactory.getPersons()

//    $scope.postPerson = function () {
//      PersonFactory.postPerson($scope.newPerson);
//    };
//  });