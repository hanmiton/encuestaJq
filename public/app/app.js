angular.module('pollApp',['appRoutes'])

.controller('regCtrl', ['$scope', '$http', function($scope, $http) {
  


  //obtener desde base de datos parentesco **falta
  $scope.parentescos = {
    opciones: [
      {id: '1', name: 'Jefe del hogar'},
      {id: '2', name: 'Conyugue'},
      {id: '3', name: 'Hijo/a'},
      {id: '4', name: 'Yerno/Nuera'},
      {id: '5', name: 'Nieto/a'},
      {id: '6', name: 'Hermano/a'},
      {id: '7', name: 'Cuñado'},
      {id: '8', name: 'Padre/Madre'},
      {id: '9', name: 'Suegro'},
      {id: '10', name: 'Otro pariente'},
      {id: '11', name: 'Otro no pariente'}
    ]
   };
   //sexos
   $scope.sexos = {
    opciones: [
      {id: '1', name: 'Hombre'},
      {id: '2', name: 'Mujer'}
    ]
   };
   //Etnia
   $scope.etnias = {
    opciones: [
      {id: '1', name: 'Mestizo'},
      {id: '2', name: 'Indigena'},
      {id: '3', name: 'Negro'},
      {id: '4', name: 'Mulato'},
      {id: '5', name: 'Montubio'},
      {id: '6', name: 'Blanco'},
      {id: '7', name: 'Otro'}
    ]
   };
   //Nacionalidad
   $scope.nacionalidades = {
    opciones: [
      {id: '1', name: 'Kayambi'},
      {id: '2', name: 'Otavalo'},
      {id: '3', name: 'Caranqui'},
      {id: '4', name: 'Otro'},
      {id: '5', name: 'Ninguno'}
    ]
   };
   //Idioma
   $scope.idiomas = {
    opciones: [
      {id: '1', name: 'Kichwa'},
      {id: '2', name: 'Otra lengua'},
      {id: '3', name: 'Castellano'},
      {id: '4', name: 'Lengua Extrajera'}
    ]
   };
	//Nacimientos
   $scope.nacimientos = {
    opciones: [
      {id: '1', name: 'Cayambe'},
      {id: '2', name: 'Ayora'},
      {id: '3', name: 'Cangahua'},
      {id: '4', name: 'Olmedo'},
      {id: '5', name: 'Cuzubamba'},
      {id: '6', name: 'Otón'},
      {id: '7', name: 'Otro'}
    ]
   };  
   	//Niveles
   $scope.niveles = {
    opciones: [
      {id: '1', name: 'Niguno'},
      {id: '2', name: 'Inicial'},
      {id: '3', name: 'Centro Alfabetizacion'},
      {id: '4', name: 'Pre-Kinder o Inicial'},
      {id: '5', name: 'Primaria/escuela'},
      {id: '6', name: 'Básica'},
      {id: '7', name: 'Bachillerato'},
      {id: '8', name: 'Secundario/colegio'},
      {id: '9', name: 'Superior/Universidad'},
      {id: '10', name: 'Post Grado'}
    ]
   };  

   $scope.poll = {
		question: '',
		personas: [ { parentesco: '',
						sexo:'',
						edad:'',
						etnia:'',
						pueblo:'',
						idioma: '',
						lugar: '',
						nivel: ''
	}]
	};

	$scope.addChoice = function() {
		$scope.poll.personas.push({ parentesco: '',
						sexo:'',
						edad:'',
						etnia:'',
						pueblo:'',
						idioma: '',
						lugar: '',
						nivel: '' });
		console.log($scope.poll.personas);
	};

  $scope.submit = function(regData) {
        console.log(this.regData.persona);
        $http.post('/api/polls', regData);
      };


}]);

