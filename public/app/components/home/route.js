reoutes.$inject = ['$stateProvider'];

export default function reoutes($stateProvider){
	$stateProvider.state('home',{
		url: '/',
		template: require('./home.html'),
		controller: 'HomeController',
		controllerAs: 'home'
	});
}