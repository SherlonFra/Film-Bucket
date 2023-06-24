//API Retrieval
$(document).ready(function () {
  $("#Movie-Tv-Container").css("display", "none");
  $("#Movie-Tv-Details").css("display", "none");
  $("#select-menu").css("display", "none");
  // var counter = 0;
  $("#Search").change(function () {
    // if (counter == 1) {
    $("#select-menu").css("display", "flex");
    var search = $("#Search").val();
    if (/\s/g.test(search)) {
      search = search.replaceAll(/\s/g, "%20"); //    used regex to handle dynamic url for search bar
    }

    // }

    const searching = {
      async: true,
      crossDomain: true,
      url: `https://ott-details.p.rapidapi.com/search?title=${search}`,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
        "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
      },
    };

    $.ajax(searching).done(function (response) {
      let length = response.results.length > 50 ? 50 : response.results.length;
      for (i = 0; i < length; i++) {
        let results = response.results[i];

        $("#select-menu").append(`<option>${results.title}<option>`);
      }
      $("#submit").click(function () {
        $("#submit").prop("disabled", true);
        var selected_value = $("#select-menu").find(":selected").text();
        search = selected_value;
        if (/\s/g.test(search)) {
          search = search.replaceAll(/\s/g, "%20"); //    used regex to handle dynamic url for search bar
        }

        searching.url = `https://ott-details.p.rapidapi.com/search?title=${search}`;

        //Replacing url to selected value to retrieve that information from new API call

        $.ajax(searching).done(function (response) {
          $("#Movie-Tv-Container").show();
          $("#Movie-Tv-Details").show();
          if (
            response.results[0].imageurl == undefined ||
            response.results[0].imageurl.length == 0 ||
            response.results[0].imageurl == null
          ) {
            $("#Movie-Tv-Container").append(
              `<img id="Dynamic-image" src="/assets/placeholder.png"></img>`
            );
          } else {
            $("#Movie-Tv-Container").append(
              `<img id="Dynamic-image" src=${response.results[0].imageurl[0]}></img>`
            );
          }
          var type = response.results[0].type;

          var title = response.results[0].title;

          var ReleaseDate = response.results[0].released;

          var genre_length = response.results[0].genre.length;

          var Genres = "";

          for (i = 0; i < genre_length; i++) {
            //Printing all the genre children from API
            Genres = Genres + response.results[0].genre[i] + " ";
          }

          var Plot;
          if (response.results[0].synopsis) {
            Plot = response.results[0].synopsis;
          } else {
            Plot = "No Plot given in API";
          }

          $("#Movie-Tv-Details").html(
            `<div id="rating">Type: ${type} </div><div id="Movie-Tv-Title"> ${title}</div><div id="arrange-Movie-Tv-details"><p>Release Date: ${ReleaseDate}</p><p>Genres: ${Genres}</p><p>Plot: ${Plot}</p></div>`
          );
        });
      });
    });
  });

  $("#Movie-Tv-show-Container").click(function () {
    window.location.href = "/views/Movie-Tv-show.html";
  });

  $("#Actor-Image").click(function () {
    console.log("CLICKED CONTAINER");
    window.location.href = "/views/actor.html";
  });

  const settings3 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt14209916",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  const settings4 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt8760708",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings5 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt10098448",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings6 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt23177868",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings7 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt7798604",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings8 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt11608752",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings9 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt15215180",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings10 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt25051184",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings11 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt23903400",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings12 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt21080770",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings14 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt21399082",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const settings15 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt23473014",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  //RESPONSE 3
  setTimeout(() => {
    $.ajax(settings3).done(function (response) {
      var movie_image1 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image1} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 300);

  setTimeout(() => {
    //RESPONSE 4

    $.ajax(settings4).done(function (response) {
      var movie_image2 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image2} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 600);

  setTimeout(() => {
    //RESPONSE 5

    $.ajax(settings5).done(function (response) {
      var movie_image3 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image3} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 900);

  setTimeout(() => {
    //RESPONSE 6

    $.ajax(settings6).done(function (response) {
      var movie_image4 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image4} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 1200);

  setTimeout(() => {
    //RESPONSE 7

    $.ajax(settings7).done(function (response) {
      var movie_image5 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image5} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 1500);

  setTimeout(() => {
    //RESPONSE 14

    $.ajax(settings14).done(function (response) {
      var movie_image6 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image6} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 1800);

  //RESPONSE 8
  setTimeout(() => {
    $.ajax(settings8).done(function (response) {
      var Tv_image1 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image1} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 2100);

  setTimeout(() => {
    //RESPONSE 9

    $.ajax(settings9).done(function (response) {
      var Tv_image2 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image2} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 2400);

  setTimeout(() => {
    //RESPONSE 10

    $.ajax(settings10).done(function (response) {
      var Tv_image3 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image3} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 2700);

  setTimeout(() => {
    //RESPONSE 11

    $.ajax(settings11).done(function (response) {
      var Tv_image4 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image4} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 3000);

  setTimeout(() => {
    $.ajax(settings12).done(function (response) {
      var Tv_image5 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image5} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 3300);

  setTimeout(() => {
    //RESPONSE 15

    $.ajax(settings15).done(function (response) {
      var Tv_image6 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image6} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 3600);

  $("#Actor-1").click(function () {
    console.log("clicked");
    window.location.href = "/views/actor.html";
  });

  var click = 0;
  $("#icon-menu").click(function () {
    click++;
    if (click == 1) {
      $(".overlay").css("opacity", "40%");
      $(".overlay").css("transition", "0.4s");
      $(".overlay").css("z-index", "-1");
    } else {
      $(".overlay").css("opacity", "100%");
      $(".overlay").css("transition", "1s");
      $(".overlay").css("z-index", "2");

      click = 0;
    }
  });

  $("#Icon_account").click(function () {
    window.location.href = "/views/accounts.html";
  });
});
