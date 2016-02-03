import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './route';
import controller from './controller';
import service from './service';

export default angular.module('app.home',[uirouter])
.config(routing)
.controller('HomeController',controller)
.service('HomeService',service)
.name;