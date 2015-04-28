var controlador = function ($scope) {

	$scope.usrs = [
	    {nombre: 'Israel Castro', medio: 'ISC'},
	    {nombre: 'Edgar Alfredo Briceño', medio: 'LAD'},
	    {nombre: 'Cesar Alvarez', medio: 'ISC'},
	    {nombre: 'Fernando Perez', medio: 'LDI'},
	    {nombre: 'Ulises Ramirez', medio: 'LAD'},
	    {nombre: 'Joaquin Gonzalez', medio: 'ITE'},
	    {nombre: 'Diego Hernandez', medio: 'IMT'},
	    {nombre: 'Justo Guzman', medio: 'LIN'}
	];

	$scope.aventones = [
		{from: 'Providencia', to: 'TEC', depTime: '7:00'},
		{from: 'Americas', to: 'TEC', depTime: '7:45'},
		{from: 'Jardin Real', to: 'TEC', depTime: '8:30'},
		{from: 'Valle Real', to: 'TEC', depTime: '9:00'},
		{from: 'Puerta de Hierro', to: 'TEC', depTime: '9:00'},
		{from: 'TEC', to: 'Puerta de Hierro', depTime: '13:15'},
		{from: 'TEC', to: 'Jardin Real', depTime: '14:15'},
		{from: 'TEC', to: 'Providencia', depTime: '14:30'}
	];
}