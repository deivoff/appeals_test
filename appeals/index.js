import angular from 'angular';

import config from './appeals.routes.js';

export default angular.module('test.appeals', [])
  .config(config)
  .name;
