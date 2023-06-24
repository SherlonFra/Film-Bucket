jQuery(document).ready(function () {
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

  const movies1 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt10954600",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const movies2 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0439572",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const movies3 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const movies4 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt1630029",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const movies5 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  // const movies6 = {
  // 	async: true,
  // 	crossDomain: true,
  // 	url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt5884796",
  // 	method: "GET",
  // 	headers: {
  // 	 "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
  // 	  "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  // 	},
  //   };

  // //RESPONSE 3
  setTimeout(() => {
    // 	console.log(" RESPONSE 3");

    $.ajax(movies1).done(function (response) {
      var movie_image1 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-2 " id="Movie-Tv-show-Container"><img src=${movie_image1} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 300);

  setTimeout(() => {
    // 	//RESPONSE 4
    // 	console.log(" RESPONSE 4");

    $.ajax(movies2).done(function (response) {
      var movie_image2 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-1" id="Movie-Tv-show-Container"><img src=${movie_image2} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 600);

  setTimeout(() => {
    // 	//RESPONSE 5

    // 	console.log(" RESPONSE 5");

    $.ajax(movies3).done(function (response) {
      var movie_image3 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-1 " id="Movie-Tv-show-Container"><img src=${movie_image3} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 900);

  setTimeout(() => {
    //RESPONSE 6

    console.log(" RESPONSE 6");

    $.ajax(movies4).done(function (response) {
      var movie_image4 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-1" id="Movie-Tv-show-Container"><img src=${movie_image4} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 1200);

  setTimeout(() => {
    //RESPONSE 7

    console.log(" RESPONSE 7");

    $.ajax(movies5).done(function (response) {
      var movie_image5 = response.image.url;
      $("#arrange-Movies").append(
        `<div class="m-1" id="Movie-Tv-show-Container"><img src=${movie_image5} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 1500);

  //   setTimeout(() => {
  // 	//RESPONSE 14

  // 	console.log(" RESPONSE 14");

  // 	$.ajax(movies6).done(function (response) {
  // 	  var movie_image6 = response.image.url;
  // 	  $("#arrange-Movies").append(
  // 		`<div class="m-1" id="Movie-Tv-show-Container"><img src=${movie_image6} id="Movie-Tv-show-image"></img></div>`
  // 	  );
  // 	});
  //   }, 1800);

  // TV Shows

  const tvShows1 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt3581920",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const tvShows2 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt7335184",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const tvShows3 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt10293938",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  const tvShows4 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt18335752",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const tvShows5 = {
    async: true,
    crossDomain: true,
    url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt14269590",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  // const tvShows6 = {
  //   async: true,
  //   crossDomain: true,
  //   url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt4236770",
  //   method: "GET",
  //   headers: {
  // 	"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 	"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  //   },
  // };

  //RESPONSE 8
  setTimeout(() => {
    console.log(" RESPONSE 8");

    $.ajax(tvShows1).done(function (response) {
      var Tv_image1 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2 " id="Movie-Tv-show-Container"><img src=${Tv_image1} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 2100);

  setTimeout(() => {
    //RESPONSE 9
    console.log(" RESPONSE 9");

    $.ajax(tvShows2).done(function (response) {
      var Tv_image2 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2 " id="Movie-Tv-show-Container"><img src=${Tv_image2} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 2400);

  setTimeout(() => {
    //RESPONSE 10

    console.log(" RESPONSE 10");

    $.ajax(tvShows3).done(function (response) {
      var Tv_image3 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2 " id="Movie-Tv-show-Container"><img src=${Tv_image3} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 2700);

  setTimeout(() => {
    //RESPONSE 11

    console.log(" RESPONSE 11");

    $.ajax(tvShows4).done(function (response) {
      var Tv_image4 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2 " id="Movie-Tv-show-Container"><img src=${Tv_image4} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 3000);

  setTimeout(() => {
    //RESPONSE 12

    console.log(" RESPONSE 12");

    $.ajax(tvShows5).done(function (response) {
      var Tv_image5 = response.image.url;
      $("#arrange-Tv-Shows").append(
        `<div class="m-2 " id="Movie-Tv-show-Container"><img src=${Tv_image5} id="Movie-Tv-show-image"></img></div>`
      );
    });
  }, 3300);

  //   setTimeout(() => {
  // 	//RESPONSE 15

  // 	console.log(" RESPONSE 15");

  // 	$.ajax(tvShows6).done(function (response) {
  // 	  var Tv_image6 = response.image.url;
  // 	  $("#arrange-Tv-Shows").append(
  // 		`<div class="m-2 " id="Movie-Tv-show-Container"><img src=${Tv_image6} id="Movie-Tv-show-image"></img></div>`
  // 	  );
  // 	});
  //   }, 3600);

  // GENRES-------------------------------------------------------------------------------------------

  //US
  $("#US").click(function () {
    const actorcountry1 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt10954600",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry2 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt1630029",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry3 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry4 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry5 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt1016150",
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
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 100);

    setTimeout(() => {
      $.ajax(actorcountry2).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 200);

    setTimeout(() => {
      $.ajax(actorcountry3).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 300);

    setTimeout(() => {
      $.ajax(actorcountry4).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 400);

    setTimeout(() => {
      $.ajax(actorcountry5).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
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
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt10954600",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry2 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt14209916",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry3 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt15679400",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry4 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt12573454",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry5 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
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
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 100);

    setTimeout(() => {
      $.ajax(actorcountry2).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 200);

    setTimeout(() => {
      $.ajax(actorcountry3).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 300);

    setTimeout(() => {
      $.ajax(actorcountry4).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 400);

    setTimeout(() => {
      $.ajax(actorcountry5).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
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
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt14209916",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry2 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt10640346",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry3 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt11813216",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry4 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry5 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt12823454",
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
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 100);

    setTimeout(() => {
      $.ajax(actorcountry2).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 200);

    setTimeout(() => {
      $.ajax(actorcountry3).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 300);

    setTimeout(() => {
      $.ajax(actorcountry4).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 400);

    setTimeout(() => {
      $.ajax(actorcountry5).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
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
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry2 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt10365998",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry3 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt8760708",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry4 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0439572",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry5 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0478970",
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
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 100);

    setTimeout(() => {
      $.ajax(actorcountry2).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 200);

    setTimeout(() => {
      $.ajax(actorcountry3).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 300);

    setTimeout(() => {
      $.ajax(actorcountry4).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 400);

    setTimeout(() => {
      $.ajax(actorcountry5).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
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
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt12823454",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry2 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt3915174",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry3 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt15333984",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry4 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt5971474",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    const actorcountry5 = {
      async: true,
      crossDomain: true,
      url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt14826022",
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
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 100);

    setTimeout(() => {
      $.ajax(actorcountry2).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 200);

    setTimeout(() => {
      $.ajax(actorcountry3).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 300);

    setTimeout(() => {
      $.ajax(actorcountry4).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
        );
      });
    }, 400);

    setTimeout(() => {
      $.ajax(actorcountry5).done(function (response) {
        actorimage = response.image.url;
        actorname = response.name;

        $("#arrange-Actors-Country").append(
          `<div class="m-2" id="Movie-Tv-show-Container"><img id="Movie-Tv-show-image" src=${actorimage}></img></div>`
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

  $("#Movie-Tv-show-image").click(function () {
    window.location.href = "/views/actor.html";
  });

  // OLD PAGE-----------------------------------------------------------------------------------------

  // const movies1 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt10954600",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // $.ajax(movies1).done(function (data) {
  // 	console.log(data.image.url);
  // });

  // $.ajax(movies1).done(function (data) {
  //     $("#movieOptions1").html(`<img class="item" src=${data.image.url}></img>`)

  // });

  // const movies2 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0439572",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // $.ajax(movies2).done(function (data) {
  // 	$("#movieOptions2").html(`<img class="item" src=${data.image.url}></img>`)
  // });

  // const movies3 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // $.ajax(movies3).done(function (data) {
  // 	$("#movieOptions3").html(`<img class="item" src=${data.image.url}></img>`)
  // });

  // const movies4 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt1630029",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // $.ajax(movies4).done(function (data) {
  // 	$("#movieOptions4").html(`<img class="item" src=${data.image.url}></img>`)
  // });

  // const movies5 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // const movies6 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt5884796",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // const movies7 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt3915174",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // setTimeout(()=>{

  //     $.ajax(movies5).done(function (data) {
  //         $("#movieOptions5").html(`<img class="item" src=${data.image.url}></img>`)
  //     });

  //     $.ajax(movies6).done(function (data) {
  //         $("#movieOptions6").html(`<img class="item" src=${data.image.url}></img>`)
  //     });

  //     $.ajax(movies7).done(function (data) {
  //         $("#movieOptions7").html(`<img class="item" src=${data.image.url}></img>`)
  //     });

  // }, 4000);

  // const tvShows1 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt3581920",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // $.ajax(tvShows1).done(function (data) {
  // 	console.log(data.image.url);
  // });

  // setTimeout(()=>{
  // $.ajax(tvShows1).done(function (data) {
  //     $("#tvOptions1").html(`<img class="item" src=${data.image.url}></img>`)

  // });
  // }, 4000);
  // const tvShows2 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0439572",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // $.ajax(tvShows2).done(function (data) {
  // 	$("#tvOptions2").html(`<img class="item" src=${data.image.url}></img>`)
  // });

  // const tvShows3 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // $.ajax(movies3).done(function (data) {
  // 	$("#tvOptions3").html(`<img class="item" src=${data.image.url}></img>`)
  // });

  // const tvShows4 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt1630029",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // $.ajax(tvShows4).done(function (data) {
  // 	$("#tvOptions4").html(`<img class="item" src=${data.image.url}></img>`)
  // });

  // const tvShows5 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // const tvShows6 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt5884796",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // const tvShows7 = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt3915174",
  // 	"method": "GET",
  // 	"headers": {
  // 		"X-RapidAPI-Key": "0952301c64msh188365cc9bf9d25p1571eejsn7752a63f7786",
  // 		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  // 	}
  // };

  // setTimeout(()=>{

  //     $.ajax(tvShows5).done(function (data) {
  //         $("#tvOptions5").html(`<img class="item" src=${data.image.url}></img>`)
  //     });

  //     $.ajax(tvShows6).done(function (data) {
  //         $("#tvOptions6").html(`<img class="item" src=${data.image.url}></img>`)
  //     });

  //     $.ajax(tvShows7).done(function (data) {
  //         $("#tvOptions7").html(`<img class="item" src=${data.image.url}></img>`)
  //     });

  // }, 4000);

  // $.ajax(settings).done(function (data) {
  // 	// console.log(data);
  // 	// console.log(data[0]);

  //     $('#movies').html(` ${data[0]}, ${data[1]}, ${data[2]}, ${data[3]}, ${data[4]}`)
});
