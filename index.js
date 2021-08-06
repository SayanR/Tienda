const express = require('express');
const app = express();
const port=process.env.PORT || 3000;
const hbs=require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

var json = require('./data/datos.json');

hbs.registerHelper("producto",()=> {
    var dato = JSON.stringify(json);
    var ret = "";
    var dato1 =  JSON.parse(dato);
    for (var i = 0; i < dato1.length;  i++) {
        ret = ret +'<div class="pr1">'
        +'<img src="'+ dato1[i].imagen+'" alt="" class="imagen1">'
        +'<h1>'+dato1[i].nombre+'</h1>'
        +'<h2>'+dato1[i].precio+'</h2></div>';
        
    };
    return  ret;
});

//express HBS view engine
app.set('view engine', 'hbs'); 

app.get('/',(req,res)=>{
   res.render('home'); 
});
app.use(express.static(__dirname+'/public'));

app.listen(port,()=>{
    console.log('Escuchando peticiones en el puerto ${port}');
  });

