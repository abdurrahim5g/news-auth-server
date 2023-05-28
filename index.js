const express = require("express");
const app = express();
const port = 5000;

const news = require("./data/news.json");
const categories = require("./data/categories.json");

// default server api
app.get("/", (req, res) => {
  res.send("News auth server is running");
});

// api for news
app.get("/news", (req, res) => {
  res.send(news);
});

// single news api
app.get("/news/:id", (req, res) => {
  const newsId = req.params.id;
  const singleNews = news.find((n) => n._id === newsId) || {};
  res.send(singleNews);
});

// api for categories
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Server running on http://localhost:5000");
});
