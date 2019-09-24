'use strict';



angular
  .module('tarjetaVisa')
    .controller('tarjetaCtrl', ['$scope', '$timeout', function($scope, $timeout){

        $scope.init = function () {

        }

        $scope.nro;
        $scope.nroVisa = true;
        $scope.aceptado= "";
        $scope.codigo="";
        $scope.nroDoc="";
        $scope.fecha="";
        $scope.nombre="";
        $scope.mensaje = "";
        $scope.mostrarResultado = false;
        $scope.time = 0;
        

        $scope.validarfecha = function () {
           
            var fechaTarjeta = [];
            fechaTarjeta = [];
            fechaTarjeta = $scope.fecha.split("/");
            var mes = parseInt(fechaTarjeta[0], 10)
            var año = parseInt(fechaTarjeta[1], 10)
            console.log(mes + "," + año);
            if (mes > 0 && mes <= 12) {
                if (año > 19) { return true; }

                else if (año === 19) {
                    if (mes > 9) { return true; }

                    else { return false; }


                } else { return false;};

            }
            else { return false;}
            ;

            
        };

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
            var fechaT = $scope.validarfecha();
           
            $scope.mostrarResultado = true;
            if($scope.codigo != "" &&  $scope.nroDoc !="" && $scope.fecha !="" && $scope.nombre!="" && $scope.nroVisa != false && fechaT != false)
            {
                $scope.aceptado= true;
                console.log("paso true");
                $scope.mensaje = "Se realizó el pago correctamente, tu pedido está en camino";
            }
            else {
                $scope.aceptado= false;
                console.log("paso false");
                $scope.mensaje = "No se puede efectuar el pago";
            }
        }

        $scope.Listo = function () {
            $scope.mensaje = "Tu pedido se registro correctamente y está en camino";
            $scope.mostrarResultado = true;
        };
    
  }]);

