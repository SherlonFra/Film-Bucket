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
const settings = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000093",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actor1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0397171",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actor2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000533",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actor3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm2812026",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actor4 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0185819",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const actor5 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm2313103",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

setTimeout(() => {
  $.ajax(actor1).done(function (response) {
    actorimage = response.image.url;
    actorname = response.name;
    $("#arrange-Actors").append(
      `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
    );
  });
}, 300);

setTimeout(() => {
  $.ajax(actor2).done(function (response) {
    actorimage = response.image.url;
    actorname = response.name;

    $("#arrange-Actors").append(
      `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
    );
  });
}, 600);

setTimeout(() => {
  $.ajax(actor3).done(function (response) {
    actorimage = response.image.url;
    actorname = response.name;

    $("#arrange-Actors").append(
      `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
    );
  });
}, 900);

setTimeout(() => {
  $.ajax(actor4).done(function (response) {
    actorimage = response.image.url;
    actorname = response.name;

    $("#arrange-Actors").append(
      `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
    );
  });
}, 1200);

setTimeout(() => {
  $.ajax(actor5).done(function (response) {
    actorimage = response.image.url;
    actorname = response.name;

    $("#arrange-Actors").append(
      `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
    );
  });
}, 1500);

$.ajax(settings).done(function (response) {
  var actor_image = response.image.url;
  var actor_name = response.name;

  $("#Actor-Name").html(`${actor_name}`);

  $("#Actor-Image-Container").html(
    `<img id="Actor-Image" src=${actor_image}></img>`
  );
});

$.ajax(settings).done(function (response) {
  var actor_birthplace = response.birthPlace;
  var actor_birthdate = response.birthDate;
  var actor_bio_temp = response.miniBios[0].text;
  var actor_bio = actor_bio_temp.split(".");

  $("#Actor-Details-Container").html(
    `<div class="mb-3" id="Actor-Details"><b>BIO</b>  <tab> ${actor_birthplace}  ${actor_birthdate}</div><p id="bio">${actor_bio[0]}${actor_bio[1]}${actor_bio[2]}.</p>`
  );
});

//ON click Country code and Api

//US
$("#US").click(function () {
  const actorcountry1 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0050959",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry2 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm8165602",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry3 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm1105980",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry4 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm2179180",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry5 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm3718007",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  setTimeout(() => {
    $.ajax(actorcountry1).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;
      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 100);

  setTimeout(() => {
    $.ajax(actorcountry2).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 200);

  setTimeout(() => {
    $.ajax(actorcountry3).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 300);

  setTimeout(() => {
    $.ajax(actorcountry4).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 400);

  setTimeout(() => {
    $.ajax(actorcountry5).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 500);

  $("#Text-Country").css("display", "none");
  $("#US").attr("disabled", "disabled");
  $("#FR").attr("disabled", "disabled");
  $("#GB").attr("disabled", "disabled");
  $("#CA").attr("disabled", "disabled");
  $("#JP").attr("disabled", "disabled");
  $("#US").css("border", "2px solid #E6402B");
  $("#FR").css("border", "2px solid #E6402B");
  $("#GB").css("border", "2px solid #E6402B");
  $("#CA").css("border", "2px solid #E6402B");
  $("#JP").css("border", "2px solid #E6402B");
});

//FR

$("#FR").click(function () {
  const actorcountry1 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0424534",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry2 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm2581521",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry3 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0369513",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry4 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm1968873",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry5 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm8567338",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  setTimeout(() => {
    $.ajax(actorcountry1).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;
      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 100);

  setTimeout(() => {
    $.ajax(actorcountry2).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 200);

  setTimeout(() => {
    $.ajax(actorcountry3).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 300);

  setTimeout(() => {
    $.ajax(actorcountry4).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 400);

  setTimeout(() => {
    $.ajax(actorcountry5).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 500);
  $("#Text-Country").css("display", "none");
  $("#US").attr("disabled", "disabled");
  $("#FR").attr("disabled", "disabled");
  $("#GB").attr("disabled", "disabled");
  $("#CA").attr("disabled", "disabled");
  $("#JP").attr("disabled", "disabled");
  $("#US").css("border", "2px solid #E6402B");
  $("#FR").css("border", "2px solid #E6402B");
  $("#GB").css("border", "2px solid #E6402B");
  $("#CA").css("border", "2px solid #E6402B");
  $("#JP").css("border", "2px solid #E6402B");
});

//CA

$("#CA").click(function () {
  const actorcountry1 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0917347",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry2 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000093",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry3 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0001295",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry4 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm2230865",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry5 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm1093951",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  setTimeout(() => {
    $.ajax(actorcountry1).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;
      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 100);

  setTimeout(() => {
    $.ajax(actorcountry2).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 200);

  setTimeout(() => {
    $.ajax(actorcountry3).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 300);

  setTimeout(() => {
    $.ajax(actorcountry4).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 400);

  setTimeout(() => {
    $.ajax(actorcountry5).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 500);
  $("#Text-Country").css("display", "none");
  $("#US").attr("disabled", "disabled");
  $("#FR").attr("disabled", "disabled");
  $("#GB").attr("disabled", "disabled");
  $("#CA").attr("disabled", "disabled");
  $("#JP").attr("disabled", "disabled");
  $("#US").css("border", "2px solid #E6402B");
  $("#FR").css("border", "2px solid #E6402B");
  $("#GB").css("border", "2px solid #E6402B");
  $("#CA").css("border", "2px solid #E6402B");
  $("#JP").css("border", "2px solid #E6402B");
});

//JP

$("#JP").click(function () {
  const actorcountry1 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm1869101",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry2 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm1821446",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry3 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm2254074",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry4 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000702",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry5 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0792263",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  setTimeout(() => {
    $.ajax(actorcountry1).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;
      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 100);

  setTimeout(() => {
    $.ajax(actorcountry2).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 200);

  setTimeout(() => {
    $.ajax(actorcountry3).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 300);

  setTimeout(() => {
    $.ajax(actorcountry4).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 400);

  setTimeout(() => {
    $.ajax(actorcountry5).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 500);
  $("#Text-Country").css("display", "none");
  $("#US").attr("disabled", "disabled");
  $("#FR").attr("disabled", "disabled");
  $("#GB").attr("disabled", "disabled");
  $("#CA").attr("disabled", "disabled");
  $("#JP").attr("disabled", "disabled");
  $("#US").css("border", "2px solid #E6402B");
  $("#FR").css("border", "2px solid #E6402B");
  $("#GB").css("border", "2px solid #E6402B");
  $("#CA").css("border", "2px solid #E6402B");
  $("#JP").css("border", "2px solid #E6402B");
});

//GB

$("#GB").click(function () {
  const actorcountry1 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0796117",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry2 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0046112",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry3 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm5584750",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry4 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000124",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const actorcountry5 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000706",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  setTimeout(() => {
    $.ajax(actorcountry1).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;
      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 100);

  setTimeout(() => {
    $.ajax(actorcountry2).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 200);

  setTimeout(() => {
    $.ajax(actorcountry3).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 300);

  setTimeout(() => {
    $.ajax(actorcountry4).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 400);

  setTimeout(() => {
    $.ajax(actorcountry5).done(function (response) {
      actorimage = response.image.url;
      actorname = response.name;

      $("#arrange-Actors-Country").append(
        `<div class="m-2" id="Actor-Containers"><img id="Actor-Images" src=${actorimage}></img>${actorname}</div>`
      );
    });
  }, 500);
  $("#Text-Country").css("display", "none");
  $("#US").attr("disabled", "disabled");
  $("#FR").attr("disabled", "disabled");
  $("#GB").attr("disabled", "disabled");
  $("#CA").attr("disabled", "disabled");
  $("#JP").attr("disabled", "disabled");
  $("#US").css("border", "2px solid #E6402B");
  $("#FR").css("border", "2px solid #E6402B");
  $("#GB").css("border", "2px solid #E6402B");
  $("#CA").css("border", "2px solid #E6402B");
  $("#JP").css("border", "2px solid #E6402B");
});

$("#RESET").click(function () {
  window.location.reload(true);
});

$("#Actor-Images").click(function () {
  window.location.href = "/views/actor.html";
});

//Menu fucntionailty
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
