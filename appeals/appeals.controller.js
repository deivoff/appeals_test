export default class AppealsController {
  constructor(
		$q,
    $state,
    AppealsService,
	) {
    'ngInject';

    this.$state = $state;

    this.AppealsService = AppealsService;
    this.$q = $q;
  }

  $onInit() {
    this.loading = true;

    this.$q.all([
      this.AppealsService.query(),
    ]).then(
      () => {
        this.loading = false;
      }
    );
  }

  open($index) {
    this.appealId = (this.appealId === $index) ? null : $index;
  }

  setStatus(appeal) {
    switch (this.appeal.status) {
      case 'Рассмотрено':
        console.log('1');
        break;
      case 'На рассмотрении':
        console.log('2');
        break;
      default:
        console.log('3');
    }
  }

  get appeals() {
    return this.AppealsService.appeals;
  }
}
