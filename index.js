var express = require("express");
var bodyParser = require('body-parser');
const path = require('morgan');
const router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(path('dev'));

//Printing the HTML Page
app.get("/url", (req, res, next) => {
    var arr = [];
    var x = 100;
    for(i = 0;i<100;i++) {
        var g = x*i;
        arr.push(g);
    }
    res.render("form");
});

//For Random Numbers
app.post("/numbers",function(req,res,next) {
    // console.log(req.body);
    // console.log(req.body.val);
    var cas = req.body.testcases;
    var mins = req.body.min;
    var maxs = req.body.max;

    var arr = [];
    for (i = 0; i < cas; i++) {
        var random = Math.floor(Math.random() * (+maxs - +mins)) + +mins;
        arr.push(random);
    }
    res.json(arr);
});


// For String Generation
app.post("/string",function(req,res,next){
    // console.log(req.body);
    // console.log(req.body.val);
    var cas = req.body.testcases;
    var stringssize = req.body.stringsize;
    var char = req.body.chars;
    console.log(req.body);
    var arr = [];
    for(i = 0;i<cas;i++) {
            var result = '';
           var charactersLength = char.length;
            for ( var j = 0; j < stringssize; j++ ) {
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            arr.push(result);
           // console.log(result);
    }
    res.json([arr]);
});

// For Array Generation
app.post("/arrays",function(req,res,next){
    // console.log(req.body);
    // console.log(req.body.val);
    var cas = req.body.testcases;
    var sizes = req.body.arraysize;
    var mins = req.body.minelement;
    var maxs = req.body.maxelement;

    var arr = [];
    for(i = 0;i<cas;i++) {
        var result = [];
        for(j = 0;j<sizes;j++) {
            var random = Math.floor(Math.random() * (+maxs - +mins)) + +mins;
            result.push(random);
        }
        arr.push(result);
    }
    res.send(arr);

});

//Server Listening
app.listen(3000, () => {
    console.log("Server running on port 3000");
});