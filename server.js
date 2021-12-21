const { response } = require('express');

let express = require('express'); //imp express

let app = express(); //initialise l'app

let rooter = require("./routes");

let mysql = require('mysql');

let tricks = false;

let idCheck = [0,0,0] //initialisation de ma variable (utiliser pour verfier qu'il n'y aient pas 2fois la même formation)

let listCatalogue = []; //créer une liste vide

let cookieParser = require('cookie-parser')//initialise le midlleware

let session = require('express-session'); //initialise la session et utilise le midlleware express-session

const { redirect } = require('express/lib/response');
const res = require('express/lib/response');
const req = require('express/lib/request');

app.use(express.urlencoded( { extended : true}));


app.use(express.static('public')); //pour ouvrir le dossier css


app.use('/',rooter);

app.listen(8000, function() {
    console.log('Running on port 8000');
});