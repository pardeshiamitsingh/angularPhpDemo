var app=angular.module('myApp',[]);
app.controller('cntrl', function($scope,$http) {
	$scope.obj={'idisable':false};
	$scope.btnName="Insert";

	$scope.insertdata=function() {
		$http.post("insert.php",{'id':$scope.id, 'name':$scope.name, 'btnName':$scope.btnName})
		.success(function(){
			$scope.msg="Data Inserted";
			$scope.displayStud();

		})

	}

	$scope.displayStud=function() {
		$http.get("select.php")
		.success(function(data) {
			$scope.data=data
		})
	}
	
	$scope.deleteStud=function(studid) {
		$http.post("delete.php",{'id':studid})
		.success(function() {
				$scope.msg="Data Deletion successfull";
				$scope.displayStud();
		})

	}

	$scope.editStud=function(studid, studname) {
		$scope.id=studid;
		$scope.name=studname;
		$scope.btnName="Update";
		$scope.obj.idisable=true;
		$scope.displayStud();

	}

});