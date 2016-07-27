var API_KEY = 'AIzaSyCry9T_zQjX12X0wx6Dcmr10taBW4Y9_Ps';

$(document).ready(function() {

function displayData(data) {
		console.log(data);
}

// var queryTerm = 'cats';
// var searchData {
// 	q: queryTerm,


// }

// "https://www.googleapis.com/youtube/v3/search?q=cats&eyk='

$.ajax({
  method: "GET",
  dataType: "json",
  url:"https://www.googleapis.com/youtube/v3/search?q=cats&key=AIzaSyCry9T_zQjX12X0wx6Dcmr10taBW4Y9_Ps",
  success: displayData,
  //data: 
});




//https://www.googleapis.com/youtube/v3/search



//AIzaSyCry9T_zQjX12X0wx6Dcmr10taBW4Y9_Ps







});


