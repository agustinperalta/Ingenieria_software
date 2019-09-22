var app = angular.module("PedidoApp", []);
app.controller("PedidoController", function ($scope) {
    $scope.modoMapa = true;

    $scope.chk_true = function () {
        $scope.modoMapa = true;
    };
    $scope.chk_false = function () {
        $scope.modoMapa = false;
    };
    
});