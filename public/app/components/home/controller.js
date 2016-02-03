export default class HomeController {
	constructor(){
		this.homeService = HomeService;
		this.homeData = this.homeService.getHomeData();
		/*set default values here!*/
		this.something = 'hi!!';
	}

	/*define methods here!*/
	changeSomething(){
		this.something = 'hello!!!';
	}
}
HomeController.$inject = ['HomeService'];