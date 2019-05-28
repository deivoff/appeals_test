import controller from './appeals.controller.js';
import templateUrl from './appeals.template.html';

export default $stateProvider => {
  'ngInject';

  $stateProvider.state('account.appeals', {
    controller,
    controllerAs: '$ctrl',
    templateUrl,
    url: '/appeals',
  });
};
