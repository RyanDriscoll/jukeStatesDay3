juke.config(function($stateProvider) {
	$stateProvider.state('allArtists', {
		url: '/artists',
		controller: 'ArtistsCtrl',
		templateUrl: '/js/artist/artist.template.html'
	});
});
