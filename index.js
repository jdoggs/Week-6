// console.log ("hello");
// const { application, response } = require("express");
// const { response } = require("express");
let express = require ("express");
let app = express();


app.use('/', express.static('public'));


app.listen(3000, ()=> {
    console.log("listening at localhost: 3000");
})

