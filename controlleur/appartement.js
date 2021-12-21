const express = require('express');
const { response } = require('express');

let mysql = require('mysql');

let listCatalogue = []; //créer une liste vide

let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'users'
});
// on prend toutes la table de catalogue et on l'envoie à userList.ejs
exports.PagePièce = function (require, response){
    response.render('pageAccueil.ejs');
};

exports.Enregistrement = function (require, response){
    let nom = require.body.name;
    let larg = require.body.lenght;
    let long = require.body.width;
    console.log(larg);
    response.render('pageAccueil.ejs');
    connection.query('INSERT INTO rooms SET ?;', {"name":nom, "length":larg, "width":long} ,function(err, result) {
        if(err) console.log(err);
        response.redirect('pageAppart.ejs');
    });
    
};

exports.PageAppart = function (require, response){
    connection.query("select * from rooms;", function(error, result){ //se connecte a la base de donné pour allez rechercher tout les élémént de catalogue correspondant a l'idcatalogue choisi
        if(error) console(error);
        console.log(result);
        response.render('pageAppart.ejs', {chamber: result});
    });
    
};


