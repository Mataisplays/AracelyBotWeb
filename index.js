const express = require('express');
const hbs = require('express-handlebars')
const path = require('path')
const app = express();
const fs = require('fs')
app.set('views', path.join(__dirname, "view"))
app.set('view engine', ".hbs")
app.engine(".hbs", hbs({
  extname: ".hbs",
  defaultLayout: "main"
}))

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render("home", {
    title: "Inicio"
  })
});


app.listen(3000, () => {
  console.log('server started');
});
