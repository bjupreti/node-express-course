const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [
  {name: "Bijay"},
  {name: "Upreti"}
]

app.get('/users', function(req, res) {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

// colons are used as variables that can be viewed in the params
app.get('/users/:id', function(req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id
  })
})

app.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "bjupreti";
  const mockPassword = "password";

  if(username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here'
    })
  } else {
    res.json({
      success: false,
      message: 'password and username does not match'
    })
  }
})

app.listen(8000, function() {
  console.log('server is running');
})