 // Require mongoose
 var mongoose = require('mongoose');

 // Create Article Schema

 var Schema = mongoose.Schema;
 var articleSchema = new Schema({
   title: {
     type: String,
     required: true,

   },
   date: String,
   Saved: {
     type: Boolean,
     default: false
   }
 });

 // Create Article Model

 var Article = mongoose.model('Articles', articleSchema);

 // Export Article Model for use by other Files

 module.Exports= Article;
