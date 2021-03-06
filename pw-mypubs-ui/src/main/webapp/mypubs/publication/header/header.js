(function() {


angular.module('pw.pubHeader', [])


.directive('pwPubheader', function() {

	var _this = {
		restrict   : 'E', //AEC
		replace    : true,
		transclude : true,
		scope      : true,
		templateUrl: 'mypubs/publication/header/header.html',
	}
	return _this
})


.controller('pubHeaderCtrl', [
'$scope', 'DataRowFieldService', 'PublicationFetcher', '$log', 'headerFields',
function ($scope, DataRowFieldService, PublicationFetcher, $log, fields) {

	var pubData = PublicationFetcher.getById('asdf')
	$scope.rows = fields
	DataRowFieldService.fieldMapper(fields, pubData)
	
	$scope.pubslist = {
		name   : "Publications List",
		action : function() {
			// TODO service.doPublicaitonsList
		}
	}
	$scope.reservations = {
		name   : "Reservations",
		action : function() {
			// TODO service.doReserveations
		}
	}

}])


.factory('headerFields', function() {
	return [
		{
			name   : "pid",
			label  : "Prod ID",
			rowType: "Readonly",
		},
		{
			name   : "idx",
			label  : "Index ID",
			rowType: "Readonly",
		},
		{
			name   : "public_date",
			label  : "Display to Public Date",
			rowType: "Date", 
			elId   : "PublicDate",
		},
	]
})


}) ()

