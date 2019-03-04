function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ counter }}</h3>',
			'</div>'
		].join(''),
		controller: function($scope) {
			$scope.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs) {
			// let wholeElem = elem[0]
			// let counterElem = wholeElem.querySelector('h3')
			// console.log(scope)
			window.addEventListener('keydown', () => {
				scope.counter++
				scope.$apply()
			})

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
