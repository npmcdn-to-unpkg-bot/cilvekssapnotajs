app.controller('MainController', ['$scope', function($scope) {
  $scope.darta = {
    icon: 'img/darta.png',
    title: 'Dārta Katrīne Salna',
    role: 'Vokāls, taustiņi',
    description: 'Some text'
  };

  $scope.aivars = {
    icon: 'img/aivars.png',
    title: 'Aivars Bruno Salna',
    role: 'Vokāls, taustiņi, ģitāra',
    description: 'Some other text'
  };

  $scope.rihards = {
    icon: 'img/rihards.png',
    title: 'Rihards Dievapēds',
    role: 'Basģitāra',
    description: 'And another text'
  };

  $scope.arturs = {
    icon: 'img/arturs.png',
    title: 'Artūrs Škutāns',
    role: 'Bungas, perkusijas',
    price: 'And something else'
  };