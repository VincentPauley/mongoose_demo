var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
    var ingredientSchema = new mongoose.Schema({
        name : String,
        type : String
    });
    var Ingredient = mongoose.model('Ingredient', ingredientSchema);
    // 000000476949198
    var new_doc = new Ingredient({
        name : 'milk',
        type : 'dairy'
    });
    new_doc.save(function(err, new_doc) {
       if(err) return console.error(err);
       console.dir(new_doc);
    });
});

mongoose.connect('mongodb://localhost/recipes');