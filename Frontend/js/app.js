var app = angular.module("mainApp", [])
    .controller("MainController", function($scope, $http) {

	var videoId = 'video';
	var scaleFactor = 1;
	var snapshots = [];
	/**
	 * Captures a image frame from the provided video element.
	 *
	 * @param {Video} video HTML5 video element from where the image frame will be captured.
	 * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
	 *
	 * @return {Canvas}
	 */
	$scope.capture = function(video, scaleFactor) {
		if(scaleFactor == null){
			scaleFactor = 1;
		}
		var w = video.videoWidth * scaleFactor;
		var h = video.videoHeight * scaleFactor;
		var canvas = document.getElementById('shot');
			canvas.width  = w;
			canvas.height = h;
		var ctx = canvas.getContext('2d');
			ctx.drawImage(video, 0, 0, w, h);
			console.log(canvas.toDataURL('image/jpeg'));
		return canvas;
	};

	/**
	 * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
	 */
	$scope.shoot = function(){
		var video  = document.getElementById(videoId);
		var output = document.getElementById('output');
		var canvas = $scope.capture(video, scaleFactor);
			canvas.onclick = function(){
				window.open(this.toDataURL());
			};
	};

	$scope.snapFrame = function(callback){
		var video  = document.getElementById('video');
		var w = video.videoWidth * scaleFactor;
		var h = video.videoHeight * scaleFactor;
		var canvas = document.getElementById('shot');
			canvas.width  = w;
			canvas.height = h;
		var ctx = canvas.getContext('2d');
			ctx.drawImage(video, 0, 0, w, h);
		callback(canvas.toDataURL('image/jpeg'));
	}

	/*$scope.snapImg = function(callback){
		var video  = document.getElementById('camera-feed');
		var w = video.width;
		var h = video.height;
		var canvas = document.getElementById('shot');
			canvas.width  = w;
			canvas.height = h;
		var ctx = canvas.getContext('2d');
			ctx.drawImage(video, 0, 0, w, h);
		callback(canvas.toDataURL('image/jpeg'));
	}
	$scope.sendImgShot = function(){
		$scope.snapImg(function(img){
			console.log(img);
		});
		setTimeout(function() {
					$scope.sendImgShot();
				}, 1000);
	};*/
$scope.isPlaying = function(){
	return !(document.getElementById('video').paused);
};

//does nothing
// $scope.change = function(selector) {
//   if (selector == "video1") {
//     $scope.content = "video1.mp4"
//   }
// }
// $scope.change("video1");
$scope.vid = "video";
$scope.changeVideo = function(name){
	$scope.vid = name;
}
$scope.sendSnapshot = function() {
	if($scope.isPlaying()){
		console.log('enters');
		$scope.snapFrame(function(snapshot){
			console.log(snapshot);
			$http({
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				url: 'http://localhost:3000/analyze',
				data: {
					image : snapshot
				}
			}).
			then(function(response) {
				console.log('Score : ' + response.data.score);
				console.log('Names : ' + response.data.names);
				if(response.data.score > 0)
				{
					$scope.alerts.push({level : response.data.score, timestamp : moment().format('h:mm:ss a')});
				}
				setTimeout(function() {
					$scope.sendSnapshot();
				}, 100);
			});
		});
	}
	else
	{
		console.log('paused, we redo function');
				setTimeout(function() {
					$scope.sendSnapshot();
				}, 1000);
	}
};

$scope.sendSnapshot();
$scope.alerts = [];


$scope.clearAlerts = function(){
	$scope.alerts = [];
}


});


//Fix video src
app.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);