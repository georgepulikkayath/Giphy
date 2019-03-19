var bid;
var cd;
var state;
var title = ["cat", "rat", "elephant", "dog", "lion","tiger","bear"];
$(document).ready(function () {
  process();
});

function image(i) {
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + i + "&api_key=a4sn3aWdzg4nOULAhPeW1bE1BFPwcwQF&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      var results = response.data;
      var s = "";
      var p;
      for (i = 0; i < results.length; i++) {

        s = '<div class="dvImg">';
        results[i].rating

        s += "<p>Rating: " + results[i].rating + "</p>";
        s += "<img src=" + results[i].images.fixed_height_still.url +"   data-still=" + results[i].images.fixed_height_still.url + " data-animate="+results[i].images.fixed_height.url+"  data-state='still' class='gif'>";
       

        /*var p = $("<p>").text("Rating: " + results[i].rating);
        
         var animalImage = $("<img>");
         animalImage.attr("src",  results[i].images.fixed_height.url);
         console.log(results[i].url);
         $("#gif-container").append(p);
         $("#gif-container").append(animalImage);*/
        s += '</div>'
        $("#gif-container").append(s);
      }
      $(".gif").on("click", function() {
        
         state=$(this).attr("data-state");
         if (state === "still") {
          var c=$(this).attr("src", $(this).attr("data-animate"));
          console.log(c);
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
        

    });
   
    });
}

function process() {
  for (i = 0; i < title.length; i++) {
    $("#btn-Container").append($('<button class="animal" >' + title[i] + '</button>'));
  }
  $(".btn-submit").on("click", function () {
    var an = $("#txt-animal").val();
    title.push(an);

    var d = $('<button class="animal">' + an + '</button>');

    $("#btn-Container").append(d);
  });
  $(document).on('click', 'button', function () {

    cd = $(this).text();
    console.log(cd);
    image(cd);
    $("#gif-container").empty();




  });

}
