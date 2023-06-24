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
const title1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt1895587",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const title2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt1024648",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const title3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt14208870",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const trailer1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=vi4025725465",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const trailer2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=vi3832463385",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const trailer3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=vi165922073",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const details1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt1895587&currentCountry=US",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const details2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt1024648&currentCountry=US",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const details3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt14208870&currentCountry=US",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const thumbnails1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-images?tconst=tt1895587&limit=25",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const thumbnails2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-images?tconst=tt1024648&limit=25",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const thumbnails3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-images?tconst=tt14208870&limit=25",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0497631",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0837177",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0005443",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards4 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000474",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards5 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm1086543",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards6 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000739",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actname1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0497631",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actname2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0837177",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actname3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0005443",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actname4 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000474",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actname5 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm1086543",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actname6 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000739",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

/*$.ajax(settings).done(function (response) {
   //console.log(response);
});*/

//First 5 calls.
$.ajax(title1).done(function (response) {
  $("#name1").html(`<p>${response.title}</p>`);
});

$.ajax(details1).done(function (response) {
  $("#details1").html(`<p>${response.plotOutline.text}</p>`);
});

$.ajax(trailer1).done(function (response) {
  $("#trailer").html(
    `<video controls autoplay loop muted src=${response.resource.encodings[1].playUrl} type="video/mp4"></video>`
  );
});

$.ajax(thumbnails1).done(function (response) {
  $("#thumbnail1").html(
    `<img class="topthumbnails" src=${response.images[0].url}></img>`
  );
  $("#thumbnail2").html(
    `<img class="topthumbnails" src=${response.images[9].url}></img>`
  );
});

$.ajax(title2).done(function (response) {
  $("#name2").html(`<p>${response.title}</p>`);
});

//Second 5 calls load in 2 seconds after the page has loaded.
setTimeout(() => {
  $.ajax(details2).done(function (response) {
    $("#details2").html(`<p>${response.plotOutline.text}</p>`);
  });

  $.ajax(trailer2).done(function (response) {
    $("#trailer2").html(
      `<video controls autoplay loop muted src=${response.resource.encodings[1].playUrl} type="video/mp4"></video>`
    );
  });

  $.ajax(thumbnails2).done(function (response) {
    $("#thumbnail3").html(
      `<img class="topthumbnails" src=${response.images[7].url}></img>`
    );
    $("#thumbnail4").html(
      `<img class="topthumbnails" src=${response.images[9].url}></img>`
    );
  });

  $.ajax(title3).done(function (response) {
    $("#name3").html(`<p>${response.title}</p>`);
  });

  $.ajax(details3).done(function (response) {
    $("#details3").html(`<p>${response.plotOutline.text}</p>`);
  });
}, 2000);

//Third 5 calls load in 4 seconds after the page has loaded.
setTimeout(() => {
  $.ajax(trailer3).done(function (response) {
    $("#trailer3").html(
      `<video controls autoplay loop muted src=${response.resource.encodings[1].playUrl} type="video/mp4"></video>`
    );
  });

  $.ajax(thumbnails3).done(function (response) {
    $("#thumbnail5").html(
      `<img class="topthumbnails" src=${response.images[20].url}></img>`
    );
    $("#thumbnail6").html(
      `<img class="topthumbnails" src=${response.images[12].url}></img>`
    );
  });

  $.ajax(topawards1).done(function (response) {
    $("#thumbnail7").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(topawards2).done(function (response) {
    $("#thumbnail8").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(topawards3).done(function (response) {
    $("#thumbnail9").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });
}, 4000);

//Fourth 5 calls load in 6 seconds after the page has loaded.
setTimeout(() => {
  $.ajax(topawards4).done(function (response) {
    $("#thumbnail10").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(topawards5).done(function (response) {
    $("#thumbnail11").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(topawards6).done(function (response) {
    $("#thumbnail12").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(actname1).done(function (response) {
    $("#name4").html(`<p>${response.name}</p>`);
  });

  $.ajax(actname2).done(function (response) {
    $("#name5").html(`<p>${response.name}</p>`);
  });
}, 6000);

//Fifth 5 calls load in 8 seconds after the page has loaded.
setTimeout(() => {
  $.ajax(actname3).done(function (response) {
    $("#name6").html(`<p>${response.name}</p>`);
  });

  $.ajax(actname4).done(function (response) {
    $("#name7").html(`<p>${response.name}</p>`);
  });

  $.ajax(actname5).done(function (response) {
    $("#name8").html(`<p>${response.name}</p>`);
  });

  $.ajax(actname6).done(function (response) {
    $("#name9").html(`<p>${response.name}</p>`);
  });
}, 8000);

$("#thumbnail1").click(function () {
  window.location.href = "/views/Movie-Tv-show-2.html";
});

$("#thumbnail2").click(function () {
  window.location.href = "/views/Movie-Tv-show-2.html";
});
$("#thumbnail3").click(function () {
  window.location.href = "/views/Movie-Tv-show-3.html";
});
$("#thumbnail4").click(function () {
  window.location.href = "/views/Movie-Tv-show-3.html";
});
$("#thumbnail5").click(function () {
  window.location.href = "/views/Movie-Tv-show-4.html";
});
$("#thumbnail6").click(function () {
  window.location.href = "/views/Movie-Tv-show-4.html";
});
$("#thumbnail7").click(function () {
  window.location.href = "/views/actor-2.html";
});
$("#thumbnail8").click(function () {
  window.location.href = "/views/actor-3.html";
});
$("#thumbnail9").click(function () {
  window.location.href = "/views/actor-4.html";
});
$("#thumbnail10").click(function () {
  window.location.href = "/views/actor-5.html";
});
$("#thumbnail11").click(function () {
  window.location.href = "/views/actor-6.html";
});
$("#thumbnail12").click(function () {
  window.location.href = "/views/actor-7.html";
});

//Click requirement for emphasis on menu
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
