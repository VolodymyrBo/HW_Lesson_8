var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'pages/home.html'
      })


      .state("about", {
        url: '/about',
        templateUrl: 'pages/about.html'
      })

      .state("about.photo", {
        url: '/photo',
        templateUrl: 'pages/about-photo.html'
      })

      .state("about.education", {
        url: '/education',
        templateUrl: 'pages/about-education.html'
      })

      .state("about.hobbies", {
        url: '/hobbies',
        templateUrl: 'pages/about-hobbies.html'
      })



      .state("resume", {
        url: '/resume',
        templateUrl: 'pages/resume.html'
      })

      .state("contacts", {
        url: '/contacts',
        templateUrl: 'pages/contacts.html'
      });

});