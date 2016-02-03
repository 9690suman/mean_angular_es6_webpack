import angular from 'angular';
import uirouter from 'angular-ui-router';

import home from './components/home';

import routing from './app.config';


angular.module('app',[uirouter,home]).config(routing);

