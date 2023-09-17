import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import CryptoJS from "crypto-js";
import cookieParser from "cookie-parser";

import { Database } from "bun:sqlite";

const db = new Database("database.db");

const app = express()

app.set("view engine", "ejs");

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

function login_required(req, res, next) {
  if (!req.cookies.sessionId) {
    res.redirect("/login");
  }
  else {
    next();
  }
}

app.get("/", login_required, (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = CryptoJS.SHA256(req.body.password).toString();

  const query = db.prepare("SELECT password FROM users WHERE username = $username");

  const result = query.all({
    $username: username,
  })[0];

  console.log(`Result: ${result.password}, Password: ${password}`)

  if (result.password != password) {
    res.status(401).render("error", { error: "401 Invalid Credentials" });
  }
  else {
    res.cookie("sessionId", CryptoJS.SHA256(password));
    res.redirect("/");
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = CryptoJS.SHA256(req.body.password).toString();

  if (username.length >= 30) {
    return res.status(404).render("error", { error: "400 Bad Request" });
  }
  
  const query = db.prepare("INSERT INTO users (username, password) VALUES ($username, $password)");
  query.all({
    $username: username,
    $password: password,
  });

  res.redirect("/login");
});
  
app.get('*', (req, res) => {
  res.status(404).render("error", { error: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("App listening at port 3000");
});