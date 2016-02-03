export default class HomeService{
	
	constructor(http){
		this.http = http;
	}

	getHomeData(){
		return "HomeData!!!";
	}
}
HomeService.$inject = ['$http'];