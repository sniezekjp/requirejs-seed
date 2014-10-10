require.config({
  baseUrl: '../',
  paths: {
    'domReady' : 'vendor/requirejs-domready/domReady',
    'angular'  : 'vendor/angular/angular',
    'router'   : 'vendor/angular-ui-router/release/angular-ui-router'
  },
  shim: {
    'angular': {
        exports: 'angular'
    },
    'router': ['angular']
  },
  deps: ['./js/bootstrap']
});