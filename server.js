if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = express.Router();


var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;

var $ = (jQuery = require("jquery")(window));

const initializePassport = require("./passportconfig");
const passport = require("passport");
const { get } = require("https");
const { name } = require("ejs");

const PHOTODIRECTORY = "./views/profile_pics/";

if (!fs.existsSync(PHOTODIRECTORY)) {
  //Folder existing or not
  fs.mkdirSync(PHOTODIRECTORY);
}

const storage = multer.diskStorage({
  destination: PHOTODIRECTORY,
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "/")));
app.use(express.static("/"));

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

app.get("/profile", checkAuthenticated, (req, res) => {
  var data = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/profile.css">
    <title>Profile</title>
  </head>
  
  <!--Nav bar-->
  <header>
  <nav class="navbar navbar-expand-lg bg-body-tertiar">
    <div class="container-fluid" id="navigation">
      <div data-bs-target="#sidebar" data-bs-toggle="collapse" class="container position-absolute top-0 start-0"
        id="icon-menu"><svg id="Icon_metro-menu" data-name="Icon metro-menu" xmlns="http://www.w3.org/2000/svg"
          width="30" height="25" viewBox="0 0 42.018 39.585">
          <path id="Icon_metro-menu-2" data-name="Icon metro-menu"
            d="M6.427,49.868H48.444v-6.6H6.427v6.6Zm0-16.494H48.444v-6.6H6.427v6.6Zm0-23.091v6.6H48.444v-6.6H6.427Z"
            transform="translate(-6.427 -10.283)" fill="#fff" opacity="0.932" />
        </svg></div>
      <a class="navbar-brand" href="/">FILMBUCKET</a>        
        <div class="container position-absolute top-0 end-0">
          <a href="/profile">
          <svg id="Icon_account" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 69 69">
            <path
              d="M35.5,3A32.5,32.5,0,1,0,68,35.5,32.512,32.512,0,0,0,35.5,3Zm0,9.75a9.75,9.75,0,1,1-9.75,9.75A9.737,9.737,0,0,1,35.5,12.75Zm0,46.15A23.4,23.4,0,0,1,16,48.435c.1-6.468,13-10.01,19.5-10.01a32.848,32.848,0,0,1,7.634,1.086c5.638,1.4,11.8,4.468,11.866,8.924A23.4,23.4,0,0,1,35.5,58.9Z"
              transform="translate(-3 -3)" fill="#fff" style="mix-blend-mode:lighten;isolation:isolate">
          </svg>
        </a>
        </div>
    </div>
    </div>
  </nav>
</header>
  
  <!--Sidebar menu-->
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto px-0 " id="content">
        <div id="sidebar" class="collapse collapse-horizontal border-end">
          <div id="sidebar-nav" class="list-group border-0 rounded-0  text-sm-center min-vh-100">
            <ul class="list-unstyled px-2">
            <li class=""><a href="/" class="text-decoration-none">Home</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/topmovies" class="text-decoration-none">Top Rated Movies</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/toptvshows" class="text-decoration-none">Top Rated Tv-Shows</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/awards" class="text-decoration-none">Awards</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/trivia" class="text-decoration-none">Trivia</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/about" class="text-decoration-none">About Us</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/search" class="text-decoration-none">Search</a></li>
              <form action="/logout?_method=DELETE" method="POST">
                <button type="submit" class="btn btn-light mt-3" id="signIn2">Log Out</button>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <body>
    <!--Page Content-->
    <div class="overlay">
      <!--Overlay div used to create opacity layer between slide menu and page content *See styling in CSS file under Slide Menu styling* -->
      <div id="profilestuff">
        <div id="profiletitle">
          <h1>Hello ${req.user.firstname}</h1>
        </div>
        <div id="useredit">
          <div id="profilepiccontainer">
            <div id="profilepic">
              <img id="profile" src="/views/profile_pics/${req.user.profilepic}" alt="">
              <label for="photo">Update Profile Picture</label>
            </div>
            <form action="/profile" method="POST" enctype="multipart/form-data">
            <input type="file" name="photo" id="photo" required>
            <button type="submit" class="btn-warning " id="submit"> Upload Profile Picture
            </button>
            </form> 
            
          </div>
  
          <div>
            <form action="">
              <div id="formdiv">
                <div>
                  <label for="firstname">First Name:</label>
                  <input type="text" name="firstname" class="form-control" value=${req.user.firstname} readonly>
  
  
  
                  <label for="lastname">Last Name:</label>
                  <input type="text" name="lastname" class="form-control" value=${req.user.lastname} readonly>
  
  
  
                  <label for="age">Age: </label>
                  <input type="text" name="age" class="form-control"  value=${req.user.age} readonly>
  
  
  
                  <label for="occupation">Occupation:</label>
                  <input type="text" name="occupation" class="form-control" value=${req.user.occupation} readonly>
  
                </div>
                <div>
                  <label for="dateofbirth">Date of Birth:</label>
                  <input type="text" name="dateofbirth" class="form-control" value=${req.user.dateofbirth} readonly>
  
  
  
                  <label for="email">Email:</label>
                  <input type="text" name="email" class="form-control" value=${req.user.email} readonly>
  
  
  
                  <label for="password">Password:</label>
                  <input type="text" name="password" class="form-control" value=${req.user.password} readonly>
  
                </div>
  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
    <footer class="text-white text-center text-small">
        <p class="mb-1">&copy; 2023 Copyright Film Bucket</p>
        <ul class="list-inline">
            <li class="list-inline-item"><a class="text-white text-decoration-underline" href="/">Home</a></li>
            <li class="text-white list-inline-item"><a class="text-white text-decoration-underline" href="/about">About
                    Us</a></li>
            <li class="text-white list-inline-item"><a class="text-white text-decoration-underline"
                    href="/trivia">Trivia</a></li>
        </ul>
    </footer>
  
    <script src="/jquery.js"></script>
    <script src="/Controller/accounts.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"></script>
  </body>
  
  </html>`;

  res.send(data);
});

app.post("/profile", upload.single("photo"), (req, res) => {
  const formFile = req.file;

  var updated_data = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/profile.css">
    <title>Profile</title>
  </head>
  
  <!--Nav bar-->
  <header>
  <nav class="navbar navbar-expand-lg bg-body-tertiar">
    <div class="container-fluid" id="navigation">
      <div data-bs-target="#sidebar" data-bs-toggle="collapse" class="container position-absolute top-0 start-0"
        id="icon-menu"><svg id="Icon_metro-menu" data-name="Icon metro-menu" xmlns="http://www.w3.org/2000/svg"
          width="30" height="25" viewBox="0 0 42.018 39.585">
          <path id="Icon_metro-menu-2" data-name="Icon metro-menu"
            d="M6.427,49.868H48.444v-6.6H6.427v6.6Zm0-16.494H48.444v-6.6H6.427v6.6Zm0-23.091v6.6H48.444v-6.6H6.427Z"
            transform="translate(-6.427 -10.283)" fill="#fff" opacity="0.932" />
        </svg></div>
      <a class="navbar-brand" href="/">FILMBUCKET</a>        
        <div class="container position-absolute top-0 end-0">
          <a href="/profile">
          <svg id="Icon_account" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 69 69">
            <path
              d="M35.5,3A32.5,32.5,0,1,0,68,35.5,32.512,32.512,0,0,0,35.5,3Zm0,9.75a9.75,9.75,0,1,1-9.75,9.75A9.737,9.737,0,0,1,35.5,12.75Zm0,46.15A23.4,23.4,0,0,1,16,48.435c.1-6.468,13-10.01,19.5-10.01a32.848,32.848,0,0,1,7.634,1.086c5.638,1.4,11.8,4.468,11.866,8.924A23.4,23.4,0,0,1,35.5,58.9Z"
              transform="translate(-3 -3)" fill="#fff" style="mix-blend-mode:lighten;isolation:isolate">
          </svg>
        </a>
        </div>
    </div>
    </div>
  </nav>
</header>
  
  <!--Sidebar menu-->
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto px-0 " id="content">
        <div id="sidebar" class="collapse collapse-horizontal border-end">
          <div id="sidebar-nav" class="list-group border-0 rounded-0  text-sm-center min-vh-100">
            <ul class="list-unstyled px-2">
            <li class=""><a href="/" class="text-decoration-none">Home</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/topmovies" class="text-decoration-none">Top Rated Movies</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/toptvshows" class="text-decoration-none">Top Rated Tv-Shows</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/awards" class="text-decoration-none">Awards</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/trivia" class="text-decoration-none">Trivia</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/about" class="text-decoration-none">About Us</a></li>
                        <hr class="h-color">
                        <li class=""><a href="/search" class="text-decoration-none">Search</a></li>
              <form action="/logout?_method=DELETE" method="POST">
                <button type="submit" class="btn btn-light mt-3" id="signIn2">Log Out</button>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <body>
    <!--Page Content-->
    <div class="overlay">
      <!--Overlay div used to create opacity layer between slide menu and page content *See styling in CSS file under Slide Menu styling* -->
      <div id="profilestuff">
        <div id="profiletitle">
          <h1>Hello ${req.user.firstname}</h1>
        </div>
        <div id="useredit">
          <div id="profilepiccontainer">
            <div id="profilepic">
              <img id="profile" src="/views/profile_pics/${formFile.filename}" alt="">
              <label for="photo">Update Profile Picture</label>
            </div>
            <div>
            <form action="/profile" method="POST" enctype="multipart/form-data">
              <input type="file" name="photo" id="photo" required>
              <button type="submit" class="btn-warning " id="submit"> Upload Profile Picture
              </button>
            </form>
            </div> 
          </div>
  
          <div>
            <form action="">
              <div id="formdiv">
                <div>
                  <label for="firstname">First Name:</label>
                  <input type="text" name="firstname" class="form-control" value=${req.user.firstname} readonly>
  
  
  
                  <label for="lastname">Last Name:</label>
                  <input type="text" name="lastname" class="form-control" value=${req.user.lastname}  readonly>
  
  
  
                  <label for="age">Age: </label>
                  <input type="text" name="age" class="form-control"  value=${req.user.age} readonly>
  
  
  
                  <label for="occupation">Occupation:</label>
                  <input type="text" name="occupation" class="form-control" value=${req.user.occupation} readonly>
  
                </div>
                <div>
                  <label for="dateofbirth">Date of Birth:</label>
                  <input type="text" name="dateofbirth" class="form-control" value=${req.user.dateofbirth} readonly>
  
  
  
                  <label for="email">Email:</label>
                  <input type="text" name="email" class="form-control" value=${req.user.email} readonly>
  
  
  
                  <label for="password">Password:</label>
                  <input type="text" name="password" class="form-control" value=${req.user.password} readonly>
  
                </div>
  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
    <footer class="text-white text-center text-small">
        <p class="mb-1">&copy; 2023 Copyright Film Bucket</p>
        <ul class="list-inline">
            <li class="list-inline-item"><a class="text-white text-decoration-underline" href="/">Home</a></li>
            <li class="text-white list-inline-item"><a class="text-white text-decoration-underline" href="/about">About
                    Us</a></li>
            <li class="text-white list-inline-item"><a class="text-white text-decoration-underline"
                    href="/trivia">Trivia</a></li>
        </ul>
    </footer>
  
    <script src="/jquery.js"></script>
    <script src="/Controller/accounts.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"></script>
  </body>
  
  </html>`;

  res.send(updated_data);
});

app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

app.post(
  "/register",
  checkNotAuthenticated,
  upload.single("photo"),
  async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const formFile = req.file;

      users.push({
        id: Date.now().toString(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
        age: req.body.age,
        occupation: req.body.occupation,
        dateofbirth: req.body.dateofbirth,
        profilepic: formFile.filename,
      });
      res.redirect("/login");
    } catch {
      res.redirect("/register");
    }
    console.log(users);
  }
);

app.delete("/logout", (req, res) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/login");
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/profile");
  }
  next();
}

////////////////////////////// Routing ///////////////////////////////////////

app.use(express.static("css"));

// app.get('/', (req, res) => {
//     res.render('home.ejs');
//    });

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

router.get("/topmovies", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/topmovies.html"));
});

router.get("/toptvshows", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/toptvshows.html"));
});

router.get("/awards", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/awards.html"));
});

router.get("/trivia", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/trivia.html"));
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

router.get("/search", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/search.html"));
});

router.get("/profile", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/profile.ejs"));
});

router.get("/trivia-thanks", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/trivia-thanks.html"));
});

app.use("/", router);

////////////////////////////// Routing Ends ///////////////////////////////////////

console.log(
  "Welcome to Film Bucket, go to port 3000, http://localhost:3000/register"
);
app.listen(3000);
