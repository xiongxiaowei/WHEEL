//angular
import angular from 'angular'
var app=angular.module('test',[])
app.controller('con1',function($scope,$http){
	$scope.goods=[]
	$scope.fetchGoods=()=>{
		$http.get('/api/goods',{cache:true}).then(function(res){
		  console.log(res.data)
		  $scope.data=res.data
		},function(res){
		  //失败时执行
		  console.log(res.data)
		})
	}
})
//common
import el from './common/index'