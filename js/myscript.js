var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getMovie, false); 

document.querySelector('#theMovie').addEventListener('keypress', getMovie, function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
  }
});

function getMovie() {
    
var userMovie = document.getElementById("theMovie").value;

console.log(userMovie);
    
var theAPICall = "https://api.themoviedb.org/3/search/movie?api_key=b7edac97c062531f29b57a28262b887c&query=" + userMovie;
    
    
var myRequest = new XMLHttpRequest();
    
myRequest.open("GET", theAPICall, true); 
    
myRequest.onload  = function() {
    
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData  = JSON.parse(myRequest.responseText);
        
        console.log(myData);
        
        document.getElementById("title").innerHTML = myData.results[0].original_title;
        
        document.getElementById("overview").innerHTML = myData.results[0].overview;
        
        document.getElementById("releaseDate").innerHTML = myData.results["0"].release_date;
        
        document.getElementById("rating").innerHTML = myData.results["0"].vote_average;
        
        var movieImage = "https://image.tmdb.org/t/p/w500"+myData.results["0"].poster_path;
        
        document.getElementById("imageMovie").src = movieImage;
        
    }
  }

myRequest.send();
}
