'use strict';

angular.module('depthyApp', [
  // 'ngSanitize',
  'ngAnimate',
  'ga',
  'shareUrls',
  // 'visibleClass',
  // 'mgcrea.ngStrap.modal',
  // 'mgcrea.ngStrap.popover',
  // 'mgcrea.ngStrap.button'
  'ui.bootstrap.buttons',
  'ui.bootstrap.modal',
  'ui.bootstrap.transition',
])
//fix blob
.config(function($compileProvider) {
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|blob):|data:image\//);
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|blob):/);
});
