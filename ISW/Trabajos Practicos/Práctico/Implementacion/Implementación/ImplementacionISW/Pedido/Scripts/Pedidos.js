var app = angular.module("PedidoApp", []);
app.controller("PedidoController", function ($scope) {
    $scope.modoMapa=true;
    $scope.loantesposible = false;
    $scope.modoTarjeta=true;

    // Ambas funciones togglean el modo de vista
    $scope.chk_true = function () {
        $scope.modoMapa = true;
    };
    $scope.chk_false = function () {
        $scope.modoMapa = false;
    };

    //Ambas funciones togglean el modo vista de pago
    $scope.chk_pagoT = function () {
        $scope.modoTarjeta = true;
        console.log($scope.modoTarjeta);
    };
    $scope.chk_pagoE = function () {
        $scope.modoTarjeta = false;
        console.log($scope.modoTarjeta);
        
    };
    


    // Carga y muestra el nombre de la foto
    // Tendría que verificar que tenga menos de 5MG !!!!!!!
    $scope.foto = function () {
        $(":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                //reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        })
    };

    //Esta funcion habilita y deshabilita inputs, segun
    // se ponga "lo antes posible" o no.
    $scope.toggleAntesPosible = function () {
        if ($scope.loantesposible) {
            $scope.loantesposible = false;
            $('#fecha').removeAttr('disabled');
            $('#hora').removeAttr('disabled');
        }else{
            $scope.loantesposible = true;
            $('#fecha').attr('disabled', 'disabled');
            $('#hora').attr('disabled', 'disabled');
        }
    };

    // VALIDACIONES para pasar a la pantalla TARJETA
    $scope.validar = function () {
        $scope.ok = true;

        // FECHAS
        if (!$scope.loantesposible) {
            $scope.fechaEntrega = $scope.manejarfecha($scope.fecha);
            $scope.fechaHoy = $scope.manejarfecha(new Date());
            if ($scope.fechaEntrega[0] === $scope.fechaHoy[0]) {
                if (parseInt($scope.fechaEntrega[1],10) === parseInt($scope.fechaHoy[1],10)) {
                    if (parseInt($scope.fechaEntrega[2],10) > parseInt($scope.fechaHoy[2],10)) {
                        // ok
                        $scope.ok = true;
                    } else {
                        // no
                        $scope.ok = false;
                    };
                } else if (parseInt($scope.fechaEntrega[1],10) > parseInt($scope.fechaHoy[1],10)) {
                    //ok
                    $scope.ok = true;
                } else {
                    // no
                    $scope.ok = false;
                };
            } else if ($scope.fechaEntrega[0] > $scope.fechaHoy[0]) {
                //ok
                $scope.ok = true;
            } else {
                // no
                $scope.ok = false;
            };
        };

        // DIRECC ENTREGA
        if ($scope.cdadEntrega == null) {
            $('#cdadEntrega').addClass("ng-invalid", "ng-touched");
            $('#cdadEntrega').focus();
            $scope.ok = false;
        };
        if ($scope.nroEntrega == null) {
            $('#nroEntrega').addClass("ng-invalid", "ng-touched");
            $('#nroEntrega').focus();
            $scope.ok = false;
        };
        if ($scope.calleEntrega == null ){
            $('#calleEntrega').addClass("ng-invalid", "ng-touched");
            $('#calleEntrega').focus();
            $scope.ok = false;
        };
        
       
        // DIRECC COMERCIO
        if (!$scope.modoMapa) {
            console.log("not modo mapa");
            if ($scope.cdadComercio == null) {
                $('#cdadComercio').addClass("ng-invalid", "ng-touched");
                $('#cdadComercio').focus();
                $scope.ok = false;
            };
            if ($scope.nroComercio == null) {
                $('#nroComercio').addClass("ng-invalid", "ng-touched");
                $('#nroComercio').focus();
                $scope.ok = false;
            };
            if ($scope.calleComercio == null ){
                $('#calleComercio').addClass("ng-invalid", "ng-touched");
                $('#calleComercio').focus();
                $scope.ok = false;
            };
        };
        // MODO MAPA
        if ($scope.modoMapa) {
            $scope.coordenadas = $('#coordenadas').val();
            if ($scope.coordenadas == "") {
                $scope.ok = false;
                $('#coordenadas').focus();
            };
        };

        // DESCRIPCION
        if ($scope.desc == null) {
            $('#desc').addClass("touched");
            $('#desc').focus();
            $scope.ok = false;
        }; 

        if ($scope.ok) {
            if ($scope.modoTarjeta) {
                window.location = 'Tarjeta.html';
            };
            if (!$scope.modoTarjeta) {
                window.location = 'Efectivo.html';
            };
        };


    };

    $scope.manejarfecha = function ($fecha) {
        var yyyy = $fecha.getFullYear();
        var mm = $fecha.getMonth() + 1;
        var dd = $fecha.getDate();
        if (dd < 10)
            dd = '0' + dd; //agrega cero si el menor de 10

        if (mm < 10)
            mm = '0' + mm; //agrega cero si el menor de 10
        return [yyyy, mm, dd];
    };

    
});