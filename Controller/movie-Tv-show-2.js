$("#submit").click(function () {
  var selected_value = $("#Selection").find(":selected").text();
  if (selected_value == "Spotlight") {
    window.location.href = "/views/Movie-Tv-show-2.html";
  }
  if (selected_value == "The Fabelmans") {
    window.location.href = "/views/Movie-Tv-show-4.html";
  }
  if (selected_value == "The Spiderman: No way home") {
    window.location.href = "/views/Movie-Tv-show-5.html";
  }
  if (selected_value == "Top Gun: Maverick") {
    window.location.href = "/views/Movie-Tv-show-6.html";
  }
  if (selected_value == "Deadpool 2") {
    window.location.href = "/views/Movie-Tv-show-7.html";
  }
  if (selected_value == "Hamilton") {
    window.location.href = "/views/Movie-Tv-show-8.html";
  }
  if (selected_value == "Joker") {
    window.location.href = "/views/Movie-Tv-show-9.html";
  }
  if (selected_value == "Parasite") {
    window.location.href = "/views/Movie-Tv-show-10.html";
  }
  if (selected_value == "Wolf of Wall Street") {
    window.location.href = "/views/Movie-Tv-show-11.html";
  }
  if (selected_value == "Top Story 3") {
    window.location.href = "/views/Movie-Tv-show-12.html";
  }
  if (selected_value == "Interstellar") {
    window.location.href = "/views/Movie-Tv-show-13.html";
  }
  if (selected_value == "Lee Jung-jae") {
    window.location.href = "/views/actor-2.html";
  }
  if (selected_value == "Jason Sudeikis") {
    window.location.href = "/views/actor-3.html";
  }
  if (selected_value == "Jean Smart") {
    window.location.href = "/views/actor-4.html";
  }
  if (selected_value == "Michael Keaton") {
    window.location.href = "/views/actor-5.html";
  }
  if (selected_value == "Amanda Seyfried") {
    window.location.href = "/views/actor-6.html";
  }
  if (selected_value == "Debbie Allen") {
    window.location.href = "/views/actor-7.html";
  }
  if (selected_value == "Bradd Pitt") {
    window.location.href = "/views/actor.html";
  }
  if (selected_value == "The Last of Us") {
    window.location.href = "/views/Movie-Tv-show-14.html";
  }
  if (selected_value == "House of the Dragon") {
    window.location.href = "/views/Movie-Tv-show-15.html";
  }
  if (selected_value == "Better Call Saul") {
    window.location.href = "/views/Movie-Tv-show-16.html";
  }
  if (selected_value == "Breaking Bad") {
    window.location.href = "/views/Movie-Tv-show-17.html";
  }
  if (selected_value == "Avatar: The last Airbender") {
    window.location.href = "/views/Movie-Tv-show-18.html";
  }
  if (selected_value == "Chernobyl") {
    window.location.href = "/views/Movie-Tv-show-19.html";
  }
  if (selected_value == "Mandalorian") {
    window.location.href = "/views/Movie-Tv-show-20.html";
  }
  if (selected_value == "The Boys") {
    window.location.href = "/views/Movie-Tv-show-21.html";
  }
  if (selected_value == "Stranger Things 4") {
    window.location.href = "/views/Movie-Tv-show-22.html";
  }
  if (selected_value == "Argo") {
    window.location.href = "/views/Movie-Tv-show-3.html";
  }
  if (selected_value == "Game of Thrones") {
    window.location.href = "/views/Movie-Tv-show.html";
  }
});
//API Retrieval

$("#Movie-Tv-show-Container").click(function () {
  window.location.href = "/views/Movie-Tv-show.html";
});

$("#Actor-Image").click(function () {
  console.log("CLICKED CONTAINER");
  window.location.href = "/views/actor.html";
});
const settings1 = {
  async: true,
  crossDomain: true,
  url: `https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt1895587&currentCountry=US`,
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};
const settings2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-full-credits?tconst=tt1895587",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};
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

const settings13 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=vi4025725465",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

$.ajax(settings13).done(function (response) {
  $("#Movie-Tv-Container").append(
    `<video controls autoplay loop muted src=${response.resource.encodings[1].playUrl} type="video/mp4"></video>`
  );
});

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

//RESPONSE 1
console.log("RESPONSE 1");
$.ajax(settings1).done(function (response) {
  //get-overview-details

  var rating = response.ratings.rating;
  var title = response.title.title;
  var ReleaseDate = response.releaseDate;
  var Genres = response.genres;
  var Plot = response.plotOutline.text;

  $("#Movie-Tv-Details").html(
    `<div id="rating">Rating: ${rating}/10 </div><div id="Movie-Tv-Title">Details ${title}</div><div id="arrange-Movie-Tv-details"><p>Release Date: ${ReleaseDate}</p><p>Genres: ${Genres}</p><p>Plot: ${Plot}</p></div>`
  );
});
//RESPONSE 2
console.log("RESPONSE 2");
$.ajax(settings2).done(function (response) {
  //Get full credits

  var director = response.crew.director[0].name;
  var cast_member1 = response.cast[0].name;
  var cast_member2 = response.cast[1].name;
  var cast_member3 = response.cast[2].name;
  var cast_member4 = response.cast[3].name;
  var cast_member5 = response.cast[4].name;
  var cast_member_image1 = response.cast[0].image.url;
  var cast_member_image2 = response.cast[1].image.url;
  var cast_member_image3 = response.cast[2].image.url;
  var cast_member_image4 = response.cast[3].image.url;
  var cast_member_image5 = response.cast[4].image.url;
  $("#Movie-Tv-Container").append(
    `</video><div id="director">Directed By: ${director}</div>`
  );
  $("#Movie-Tv-Actors").html(
    `<div class="d-flex flex-row justify-content-center align-items-center" id="arrange">
              <div class="m-2 Actor-Container" id="Actor-1"><img src=${cast_member_image1} id="Actor-image"></img><p id="Actor-name">${cast_member1}</p></div>
              <div class="m-2 Actor-Container" id="Actor-2"><img src=${cast_member_image2} id="Actor-image"></img><p id="Actor-name">${cast_member2}</p></div>
              <div class="m-2 Actor-Container" id="Actor-3"><img src=${cast_member_image3} id="Actor-image"></img><p id="Actor-name">${cast_member3}</p></div>
              <div class="m-2 Actor-Container" id="Actor-4"><img src=${cast_member_image4} id="Actor-image"></img><p id="Actor-name">${cast_member4}</p></div>
              <div class="m-2 Actor-Container" id="Actor-5"><img src=${cast_member_image5} id="Actor-image"></img><p id="Actor-name">${cast_member5}</p></div>
          </div>
        <div id="Cast">Top Cast</div>`
  );
});

//RESPONSE 3
setTimeout(() => {
  console.log(" RESPONSE 3");

  $.ajax(settings3).done(function (response) {
    var movie_image1 = response.image.url;
    $("#arrange-Movies").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image1} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 300);

setTimeout(() => {
  //RESPONSE 4
  console.log(" RESPONSE 4");

  $.ajax(settings4).done(function (response) {
    var movie_image2 = response.image.url;
    $("#arrange-Movies").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image2} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 600);

setTimeout(() => {
  //RESPONSE 5

  console.log(" RESPONSE 5");

  $.ajax(settings5).done(function (response) {
    var movie_image3 = response.image.url;
    $("#arrange-Movies").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image3} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 900);

setTimeout(() => {
  //RESPONSE 6

  console.log(" RESPONSE 6");

  $.ajax(settings6).done(function (response) {
    var movie_image4 = response.image.url;
    $("#arrange-Movies").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image4} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 1200);

setTimeout(() => {
  //RESPONSE 7

  console.log(" RESPONSE 7");

  $.ajax(settings7).done(function (response) {
    var movie_image5 = response.image.url;
    $("#arrange-Movies").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image5} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 1500);

setTimeout(() => {
  //RESPONSE 14

  console.log(" RESPONSE 14");

  $.ajax(settings14).done(function (response) {
    var movie_image6 = response.image.url;
    $("#arrange-Movies").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${movie_image6} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 1800);

//RESPONSE 8
setTimeout(() => {
  console.log(" RESPONSE 8");

  $.ajax(settings8).done(function (response) {
    var Tv_image1 = response.image.url;
    $("#arrange-Tv-Shows").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image1} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 2100);

setTimeout(() => {
  //RESPONSE 9
  console.log(" RESPONSE 9");

  $.ajax(settings9).done(function (response) {
    var Tv_image2 = response.image.url;
    $("#arrange-Tv-Shows").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image2} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 2400);

setTimeout(() => {
  //RESPONSE 10

  console.log(" RESPONSE 10");

  $.ajax(settings10).done(function (response) {
    var Tv_image3 = response.image.url;
    $("#arrange-Tv-Shows").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image3} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 2700);

setTimeout(() => {
  //RESPONSE 11

  console.log(" RESPONSE 11");

  $.ajax(settings11).done(function (response) {
    var Tv_image4 = response.image.url;
    $("#arrange-Tv-Shows").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image4} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 3000);

setTimeout(() => {
  //RESPONSE 12

  console.log(" RESPONSE 12");

  $.ajax(settings12).done(function (response) {
    var Tv_image5 = response.image.url;
    $("#arrange-Tv-Shows").append(
      `<div class="m-2" id="Movie-Tv-show-Container"><img src=${Tv_image5} id="Movie-Tv-show-image"></img></div>`
    );
  });
}, 3300);

setTimeout(() => {
  //RESPONSE 15

  console.log(" RESPONSE 15");

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
