

$(document).ready(function() {


	function getResults(data) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				part: "snippet",
				key: "AIzaSyCry9T_zQjX12X0wx6Dcmr10taBW4Y9_Ps",
				q: data
			},
				function (data) {
			
				displaySearchResults(data.items);
			}

		);
	}

	function displaySearchResults(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			// append li to ul

			console.log(video);
			console.log(video.id.videoId);
			html = html + "<li><p>" + video.snippet.title +
				"</p><a href='https://www.youtube.com/watch?v=''"+video.id.videoId+ "'target='_blank'>"
					+"<img src='" +  video.snippet.thumbnails.high.url + "'/></a></li>" ;

		});
		$("#content").html(html);
	}

	$("form").submit(function (event) {
		event.preventDefault();
		getResults($("#search-item").val());
	});


});



// / Create a listing for a video.
// function displayResult(videoSnippet) {
//   var title = videoSnippet.title;
//   var videoId = videoSnippet.resourceId.videoId;
//   $('#video-container').append('<p>' + title + ' - ' + videoId + '</p>');
// }








