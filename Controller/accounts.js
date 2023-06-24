const topawards2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt15679400",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt11813216",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards4 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards5 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards6 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt7798604",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

$.ajax(topawards2).done(function (response) {
  $(".pic1").html(`<img id="pic1" src=${response.image.url}></img>`);
});

$.ajax(topawards3).done(function (response) {
  $(".pic2").html(`<img id="pic2" src=${response.image.url}></img>`);
});

$.ajax(topawards4).done(function (response) {
  $(".pic3").html(`<img id="pic3" src=${response.image.url}></img>`);
});

$.ajax(topawards5).done(function (response) {
  $(".pic4").html(`<img id="pic4" src=${response.image.url}></img>`);
});

$.ajax(topawards6).done(function (response) {
  $(".pic5").html(`<img id="pic5" src=${response.image.url}></img>`);
});

var slider = document.getElementById("agerange");
var output = document.getElementById("agespan");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

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

// setting up firebase with our website

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC80QsCY59C7U2VzkELvrnY6jrycLiczjI",
  authDomain: "fir-wddm-d1804.firebaseapp.com",
  projectId: "fir-wddm-d1804",
  storageBucket: "fir-wddm-d1804.appspot.com",
  messagingSenderId: "849060951078",
  appId: "1:849060951078:web:5e8a989f9934b6d36ce2e7",
  measurementId: "G-63F30E1G28"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

firebase.auth().onAuthStateChange(function name(user){
if(user){
  document.title="/profile"
}
})

//google 
const SignInWithGoogleButton = document.getElementById("google-btn");
const SignInWithGithubButton = document.getElementById("facebook-btn");

const signInWithGoogle = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider)
    .then((result) => {
        window.location ='profile'
        console.log(result)
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
        // ..
    });
}

SignInWithGoogleButton.addEventListener('click', signInWithGoogle);

//github
const signInWithGithub = () =>{

    const githubProvider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(githubProvider)
    .then((result) => {
      window.location.href = "profile";
        console.log(result)
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
        // ..
    });
}

SignInWithGithubButton.addEventListener('click', signInWithGithub);



// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location ='http://localhost:3000/register'
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location ='http://localhost:3000/register'
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}

function logout(){
  firebase.auth().signOut()
}