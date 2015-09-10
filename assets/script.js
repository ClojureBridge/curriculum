angular.module('slides', ['ngSanitize'])
    .controller('NarrativeController', ['$scope', function($scope) {
        $scope.intro='Intro';
        $scope.details='Details';
        $scope.details1='Details 1';
        $scope.details2='Details 2';
        $scope.details3='Details 3';
        $scope.exercise='Exercise';
    }]);
