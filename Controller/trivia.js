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

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYdPisfkCcLxPuzy-jM2UQRvORxPq5olk",
  authDomain: "film-bucket-v3.firebaseapp.com",
  databaseURL: "https://film-bucket-v3-default-rtdb.firebaseio.com",
  projectId: "film-bucket-v3",
  storageBucket: "film-bucket-v3.appspot.com",
  messagingSenderId: "717415814149",
  appId: "1:717415814149:web:992815ffeae3bca17e386c",
});

var TriviaFormDB = firebase.database().ref("TriviaForm"); //Creating db location reference

//When I submit the form, it will call this function the submitForm function

function submitForm(event) {
  //e will be using to reference the event object
  event.preventDefault(); //prevent the form from going to another page when we submit

  //Get ref for fields inside the form
  var ans1 = document.getElementById("ans1").value;
  var ans2 = document.getElementById("ans2").value;
  var ans3 = document.getElementById("ans3").value;

  saveData(ans1, ans2, ans3);
  console.log(ans1, ans2, ans3);
  document.getElementById("TriviaForm").reset();
}

const saveData = (ans1, ans2, ans3) => {
  //Push this array onto our database
  var newSignForm = TriviaFormDB.push();

  //Set the values of the array
  //to name, email, and message content
  newSignForm.set({
    ans1: ans1,
    ans2: ans2,
    ans3: ans3,
  });
};
setTimeout(() => {
  $("#submitbtn").click(function () {
    window.location.href = "/views/trivia-thanks.html";
  });
}, 3000);
