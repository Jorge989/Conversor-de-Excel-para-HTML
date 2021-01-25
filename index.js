const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");

const JWTSecret = "kkkkkkkkk";
function auth(req,res,next){
  const authToken = req.headers['authorization'];
  if(authToken != undefined){

const bearer = authToken.split(' ');
console.log(bearer)
var token = bearer[1] ;
jwt.verify(token,JWTSecret,(err,data)=>{
  if(err){
    res.status(401);
    res.json({err:"Token inválido!"});

  }else{
    req.token=token;
    req.loggedUser = {id: data.id, email: data.email};
    next();
  
  }
});
  }else{
    res.status(401);
    res.json({err:"Token inválido!"});
  }


}

var DB = {
  games: [
    {
      id: 23,
      title: "Call od duty",
      year: 2019,
      price: 60,
    },
    {
      id: 65,
      title: "Prince os persa",
      year: 2020,
      price: 65,
    },
    {
      id: 2,
      title: "Good of war 4",
      year: 2020,
      price: 70,
    },
  ],
  users:[
    {
id: 1,
name:"Jorge",
email: "jorge@jorge",
senha: "nodejs"
    },
    {
      id: 20,
      name:"Yakuzi",
      email: "yakuzi@japa",
      senha: "backend"
    }
  ]





};

app.get("/games",auth, (req, res) => {
  res.statusCode = 200;
  res.json({users:req.loggedUser})
  res.json(DB.games);
});

app.get("/games/:id",auth, (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus = 400;
  } else {
    var id = parseInt(req.params.id);
    var game = DB.games.find((g) => g.id == id);
    if (game != undefined) {
      res.statusCode = 200;
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  }
});
app.post("/games",auth, (req, res) => {
  var { title, price, year } = req.body;
  DB.games.push({
    id: 1221,
    title,
    price,
    year,
  });
  res.sendStatus(200);
});

app.delete("/games/:id",auth, (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus = 400;
  } else {
    var id = parseInt(req.params.id);
    var index = DB.games.findIndex(g => g.id ==id);
    if(index == -1){
res.sendStatus(404);
    }else{
DB.games.splice(index, 1);
res.sendStatus(200);
    }
  }
});

app.put("/games/:id",auth, (req,res)=>{
  if (isNaN(req.params.id)) {
    res.sendStatus = 400;
  } else {
    var id = parseInt(req.params.id);
    var game = DB.games.find(g => g.id == id);
    if (game != undefined) {
     var {title, price, year} = req.body;
if(title != undefined){
  game.title =title;
}

if(price != undefined){
  game.price =price;
}
if(year != undefined){
  game.year =year;
}

res.sendStatus(200);



    } else {
      res.sendStatus(404);
    }
  }
})
app.post("/auth",(req,res)=>{
  var{email,senha} = req.body;
  if(email!= undefined){
var users = DB.users.find(users => users.email ==email);
if(users != undefined){
if(users.senha == senha){
  jwt.sign({id: users.id, email:users.email}, JWTSecret,{expiresIn:'1h'},(err,token)=>{
    if(err){
      res.status(400);
      res.json({err:"Falha interna"})
    }else{
      res.status(200);
res.json({token:token})
    }
  })

}else{
  res.status(401);
  res.json({err: "credensiais inválidas"})
}


}else{
  res.status(404);
  res.json({err: "email enviado não existe na base de dados"})
}
  }else{
    res.status(400);
res.json({err: "email inválido"})
  }
})
app.listen(8080, () => {
  console.log("API RODANDO!");
});
