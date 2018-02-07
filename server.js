var fs = require('fs');
var express = require('express');
var app = express();
var path=require ('path');
app.set('view engine', 'ejs');
var myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(myParser.json());// parse application/json



app.listen(process.env.PORT || 4000, function () {
    console.log('Example app listening on port 3000!');

});

app.post('/upload', function(req, res) {
    /*console.log(req.files.image.originalFilename);
    console.log(req.files.image.path);
    fs.readFile(req.files.image.path, function (err, data) {
        var dirname = "/home/rajamalw/Node/file-upload";
        var newPath = dirname + "/uploads/" + req.files.image.originalFilename;
        fs.writeFile(newPath, data, function (err) {
            if (err) {
                res.json({'response': "Error"});
            } else {
                res.json({'response': "Saved"});
            }
        });
    }*/

    console.log("Upload has been hit");
});