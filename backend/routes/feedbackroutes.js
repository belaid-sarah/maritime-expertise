const express = require("express");
const Feedback = require('../models/feedbackSchema');

const router = express.Router();

router.post('/feedback', async (req, res) => {
    const { email, comment } = req.body;
    const feedback = new Feedback({
        email,
        comment
    });
    try {
        const savedFeedback = await feedback.save().then((result) => {
            res.send("feedback created successfully");
          });
        res.status(201).json(savedFeedback);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});

router.get('/feedback', (req, res) => {
    res.send("this is a feedback page");
})

module.exports = router;
