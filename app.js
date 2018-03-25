const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Handle-Bars Middleware : Template Engine
app.engine('handlebars',exphbs({
  defaultLayout: 'main'
}));
app.set('view engine','handlebars');

// Index Route
app.get('/',(req,res)=>{
  const title = "Welcome";
  res.render('index',{
    title: title
  });
}); // Handling a get request of HTTP

//ABOUT Route
app.get('/about',(req,res)=>{
  res.render('about');
}); // Handling a get request of HTTP
  
const port = 5000;
app.listen(port,()=>{
  console.log(`Server started on port ${port}`); //ES6 way of simple concatenation!
});