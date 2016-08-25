'use strict';


juke.config(function ($stateProvider) {
	$stateProvider.state('allAlbums', {
		url: '/albums',
		controller: 'AlbumsCtrl',
		// resolve: {
		// 	albums: function() {
		// 		return AlbumsCtrl.fetchAll()
		// 	}
		// },
		// controller: function($scope, albums) {
		// 	$scope.albums = albums;
		// },
		templateUrl: '/js/album/album.template.html'
	})
	.state('allAlbums.singleAlbum', {
		url: '/albums/:albumId',
		// resolve: {

		// },
		controller: function($scope, $stateParams) {
			$scope.albumId = $stateParams;
		},
		template: '/js/album/singleAlbum.template.html'

	})
})


