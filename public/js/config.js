'use strict';

var app = angular.module('testApp');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html', controller: 'homeCtrl' })
    .state('login', {url: '/login', templateUrl: '/html/login.html', controller: "loginCtrl"})
    .state('register', {url: '/register', templateUrl: 'html/register.html', controller: 'registerCtrl'})
  $urlRouterProvider.otherwise('/');
});
