{"filter":false,"title":"wellbore.js","tooltip":"/client/js/wellbore.js","undoManager":{"mark":95,"position":95,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":75,"column":1},"action":"insert","lines":["function ProductsController ($scope, $http) {","        ","        $scope.productFromDB = {description: 'NotFoundYet', price: 0};","        ","        $scope.selectedLocation;","        ","        $scope.selectedProduct; // = {description: 'NotFoundYet', price: 0};","        ","        $scope.cart = [];","        ","        $scope.order;","        ","//        $scope.order.orderLines.put( qty : 1 : product : {selecteProduct})","        ","        $scope.addProduct = function() {","            $scope.cart.push($scope.selectedProduct); ","        };","        ","        $scope.removeProduct = function(item) {","        \t$scope.cart.splice($scope.cart.indexOf(item),1);","        }","        ","        $scope.getProduct = function() {","            $http.get('http://localhost:8080/products/' + $scope.selectedProduct.mongoId).","                success(function(data) {","                    $scope.productFromDB = data;","                });","        };","        ","//        function getAllProducts() {","//            $http.get('http://localhost:8080/products/').","//                success(function(data) {","//                    $scope.products = data;","//                });","//        }","        ","        function getAllLocations() {","            $http.get('http://localhost:8080/locations/').","                success(function(data) {","                    $scope.locations = data;","                });","        }","        ","        $scope.submitCart = function() {","        \tvar cartData = $scope.cart;","        \t","        \t$.ajax({","        \t    url:'http://localhost:8080/orders/',","        \t    type:'POST',","        \t    data: JSON.stringify(cartData),","        \t    dataType: 'json',","        \t    contentType: \"application/json; charset=utf-8\",","        \t    success:function(data){","        \t        ","      \t    \t    $scope.$apply( function () {","      \t    \t    \t$scope.order = data;","      \t    \t    \t$scope.selectedProduct = null;","      \t    \t    });","        \t    },","        \t    error:function(res){","        \t        alert(\"Bad thing happend! \" + res.statusText);","        \t    }","        \t});","        }","        ","        $scope.total = function() {","            var total = 0;","            angular.forEach($scope.cart, function(item) {","                total += item.price;","            });","","            return total;","        }","        ","        getAllLocations();","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":7},"end":{"row":72,"column":9},"action":"remove","lines":[" $scope.submitCart = function() {","        \tvar cartData = $scope.cart;","        \t","        \t$.ajax({","        \t    url:'http://localhost:8080/orders/',","        \t    type:'POST',","        \t    data: JSON.stringify(cartData),","        \t    dataType: 'json',","        \t    contentType: \"application/json; charset=utf-8\",","        \t    success:function(data){","        \t        ","      \t    \t    $scope.$apply( function () {","      \t    \t    \t$scope.order = data;","      \t    \t    \t$scope.selectedProduct = null;","      \t    \t    });","        \t    },","        \t    error:function(res){","        \t        alert(\"Bad thing happend! \" + res.statusText);","        \t    }","        \t});","        }","        ","        $scope.total = function() {","            var total = 0;","            angular.forEach($scope.cart, function(item) {","                total += item.price;","            });","","            return total;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":0},"end":{"row":34,"column":11},"action":"remove","lines":["//        function getAllProducts() {","//            $http.get('http://localhost:8080/products/').","//                success(function(data) {","//                    $scope.products = data;","//                });","//        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":8},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":4},"end":{"row":28,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":10},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":8},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":2,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":8},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":9,"column":11},"action":"insert","lines":["var wellboreList=[{\"id\":\"id1\",\"name\":\"well1\"}];","       ","        $.getJSON('/wellbores/wellborelist', function(data){","            ","            //$scope.wellboreList = data;","            //$scope.$apply();","        });"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":11},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":27},"action":"remove","lines":["ProductsController"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":27},"action":"insert","lines":["WellboreController"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":7},"end":{"row":36,"column":10},"action":"remove","lines":[" $scope.addProduct = function() {","            $scope.cart.push($scope.selectedProduct); ","        };","        ","        $scope.removeProduct = function(item) {","        \t$scope.cart.splice($scope.cart.indexOf(item),1);","        }","        ","        $scope.getProduct = function() {","            $http.get('http://localhost:8080/products/' + $scope.selectedProduct.mongoId).","                success(function(data) {","                    $scope.productFromDB = data;","                });","        };"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":8},"end":{"row":23,"column":7},"action":"remove","lines":["","//        $scope.order.orderLines.put( qty : 1 : product : {selecteProduct})","        ","       "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":17},"end":{"row":22,"column":32},"action":"remove","lines":["getAllLocations"]},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":29},"end":{"row":22,"column":30},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":27},"end":{"row":25,"column":36},"action":"remove","lines":["locations"]},{"start":{"row":25,"column":27},"end":{"row":25,"column":39},"action":"insert","lines":["wellboreList"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":8},"end":{"row":31,"column":23},"action":"remove","lines":["getAllLocations"]},{"start":{"row":31,"column":8},"end":{"row":31,"column":23},"action":"insert","lines":["getAllWellbores"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":20,"column":8},"action":"remove","lines":["  $scope.productFromDB = {description: 'NotFoundYet', price: 0};","        ","        $scope.selectedLocation;","        ","        $scope.selectedProduct; // = {description: 'NotFoundYet', price: 0};","        ","        $scope.cart = [];","        ","        $scope.order;","        "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":8},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":4},"end":{"row":10,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":23},"end":{"row":13,"column":54},"action":"remove","lines":["http://localhost:8080/locations"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":80},"action":"insert","lines":["https://realtimeviz-ajontved.c9.io/wellbores/wellborelist"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":11},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":11},"action":"insert","lines":["           "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":20},"end":{"row":13,"column":23},"action":"remove","lines":["log"]},{"start":{"row":13,"column":20},"end":{"row":13,"column":25},"action":"insert","lines":["log()"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":24},"end":{"row":13,"column":26},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["W"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":46},"end":{"row":13,"column":47},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":47},"end":{"row":13,"column":48},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":48},"end":{"row":13,"column":49},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":49},"end":{"row":13,"column":50},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":51},"end":{"row":13,"column":52},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"remove","lines":["s"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":27},"end":{"row":14,"column":27},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1426599997738,"hash":"948672b8d80217c7c5ba23975f394a0d324f3c52"}