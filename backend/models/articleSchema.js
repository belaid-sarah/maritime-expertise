const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = new Schema(  {

    title: String,
    image: [
      {
      url: String,
      filename: String
    }
],
    summary: String,
    body: String,
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }

  });


const Article = mongoose.model("Article", articleSchema);
  


module.exports = Article;