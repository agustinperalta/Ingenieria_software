var app = angular.module("PedidoApp", []);
app.controller("PedidoController", function ($scope) {
    $scope.modoMapa = false;

    $scope.chk = function () {

        if ($scope.modoMap) {
            $scope.modoMapa = false;
        }
        if ($scope.modoManual) {
            $scope.modoMapa = true;
        }
    };

});