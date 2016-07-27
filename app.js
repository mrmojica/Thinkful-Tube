

$(document).ready(function() {

//get video to play in thumbnail.
//show link to video's channel.
//create button to show more results.


//display random videos (max 6).
//user searches , video displays + add button feature to reveal additional videos.
//optional -section to display users videos channel information?


	function getResults(data) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search", 
			{

			part: "snippet",
			maxResults: 6,
			key: "AIzaSyCry9T_zQjX12X0wx6Dcmr10taBW4Y9_Ps",
			q: data

	}
			, 
			function (data) {
				display(data.items);
				// displaySearchResults(data.items);
			}

		);
	}

	// function displaySearchResults(videos) {
	// 	var html = "";
	// 	$.each(videos, function (index, video) {
	// 		// append li to ul

	// 		console.log(video);
	// 		console.log(video.id.videoId);
	// 		html = html + "<li><p>" + video.snippet.title + "</p>"
	// 			+"<a href='https://www.youtube.com/watch?v="+video.id.videoId+ "'>"
	// 				+"<img src='" +  video.snippet.thumbnails.high.url + "'/></a></li>" ;

	// 	});
	// 	$("#content").html(html);
	// }

	function display(random) {
		var html = '';

		$.each(random, function (index, video) {
			console.log(video);
			html = html + "<li><p>" + video.snippet.title + "</p>"
				+"<a href='https://www.youtube.com/watch?v="+video.id.videoId+ "'>"
					+"<img src='" +  video.snippet.thumbnails.high.url + "'/></a></li>" ;

		});
		$("#content").html(html);
	}
	getResults(data.items);

function random() {
		var randomN = Math.floor(Math.random() * 6);
		console.log(video.snippet.title);
	


}











	// $("form").submit(function (event) {
	// 	event.preventDefault();
	// 	getResults($("#search-item").val());
	// });


});














