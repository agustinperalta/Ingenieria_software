﻿'use strict';



angular
  .module('tarjetaVisa')
    .controller('tarjetaCtrl', ['$scope', '$timeout', function($scope, $timeout){

        $scope.init = function () {

        }

        $scope.nro = 4000000000000000;
        $scope.nroVisa = true;
        $scope.aceptado= "";
        $scope.codigo="";
        $scope.nroDoc="";
        $scope.fecha="";
        $scope.nombre="";
        $scope.mensaje = "";
        $scope.mostrarResultado = false;
        $scope.time = 0;

       $scope.validar = function () {
           var nroVisa = false;
            if ($scope.nro >= 4000000000000000 && $scope.nro < 5000000000000000) {
                $scope.nroVisa=true;
                console.log($scope.nroVisa);

            } else {
                $scope.nroVisa = false;
            }
       };


        $timeout(function(){
            $scope.mostrarResultado = false;
        }, 5000 );



        
        //timer callback
        var timer = function() {
            if( $scope.time < 5000 ) {
                $scope.time += 1000;
                $timeout(timer, 1000);
            }
        }
        
        
        $timeout(timer, 1000);       
        

        $scope.Pagar = function () {
            $scope.validar();
           
            $scope.mostrarResultado = true;
            if($scope.codigo != "" &&  $scope.nroDoc !="" && $scope.fecha !="" && $scope.nombre!="" && $scope.nroVisa != false)
            {
                $scope.aceptado= true;
                console.log("paso true");
                $scope.mensaje = "Se realizó el pago correctamente!";
            }
            else {
                $scope.aceptado= false;
                console.log("paso false");
                $scope.mensaje = "Faltan casilleros por llenar!";
            }
        }

    
  }]);

