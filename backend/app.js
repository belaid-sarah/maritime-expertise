if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authroutes');
const articleroutes = require('./routes/articleroutes');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages');
const feedbackroutes = require('./routes/feedbackroutes');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const { requireAuth } = require('./Middleware/authMiddleware');
const port = 3000;

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));


// database connection
const dbURI = 'mongodb+srv://louai:Vad3r2023@cluster0.psdlin6.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => { app.listen(3000);
    console.log("CONNECTED TO DATABASE");})
  .catch((err) => console.log(err));


// routes
app.use(authRoutes);
app.use(articleroutes);
app.use(conversationRoute);
app.use(messageRoute);
app.use(feedbackroutes);
app.get('/', (req, res) => {
  res.send("this is home page");
});




