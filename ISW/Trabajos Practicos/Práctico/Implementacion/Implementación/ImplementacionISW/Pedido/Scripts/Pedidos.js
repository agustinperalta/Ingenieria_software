var app = angular.module("PedidoApp", []);
app.controller("PedidoController", function ($scope) {
    $scope.modoMapa=true;
    $scope.loantesposible = false;

    // Ambas funciones togglean el modo de vista
    $scope.chk_true = function () {
        $scope.modoMapa = true;
    };
    $scope.chk_false = function () {
        $scope.modoMapa = false;
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

    $scope.validar = function () {
        $scope.ok = true;
        

        // DIRECC ENTREGA
        if ($scope.cdadEntrega == null) {
            $('#cdadEntrega').focus();
            $('#cdadEntrega').addClass("ng-invalid", "ng-touched");
            $scope.ok = false;
        };
        if ($scope.nroEntrega == null) {
            $('#nroEntrega').focus();
            $('#nroEntrega').addClass("ng-invalid", "ng-touched");
            $scope.ok = false;
        };
        if ($scope.calleEntrega == null ){
            $('#calleEntrega').focus();
            $('#calleEntrega').addClass("ng-invalid", "ng-touched");
            $scope.ok = false;
        };
        
       
        // DIRECC COMERCIO
        if (!$scope.modoMapa) {
            console.log("not modo mapa");
            if ($scope.cdadComercio == null) {
                $('#cdadComercio').focus();
                $('#cdadComercio').addClass("ng-invalid", "ng-touched");
                $scope.ok = false;
            };
            if ($scope.nroComercio == null) {
                $('#nroComercio').focus();
                $('#nroComercio').addClass("ng-invalid", "ng-touched");
                $scope.ok = false;
            };
            if ($scope.calleComercio == null ){
                $('#calleComercio').focus();
                $('#calleComercio').addClass("ng-invalid", "ng-touched");
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
            $('#desc').focus();
            $('#desc').addClass("touched");
            $scope.ok = false;
        }; 

        if ($scope.ok) {
            window.location = 'Tarjeta.html';
        };


    };


    
});