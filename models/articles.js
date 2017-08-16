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
   },
   
  link: {
    type: String,
    required: true
  },
  

  summary: {
    type: String,
    required: true
  }
 });

 // Create Article model

 var Article = mongoose.model('Articles', articleSchema);

 // Export Article model

 module.Exports= Article;
