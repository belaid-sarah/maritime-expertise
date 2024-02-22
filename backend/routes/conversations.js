
const router = require('express').Router();
const { find } = require('../models/articleSchema');
const Conversation = require("../models/Conversation");

//new conversation
router.post("/", async(req,res) => {
    const newConversation = new Conversation({
        memebers: [req.body.senderId, req.body.receiverId],
    })

try {
        const savedConversation = await newConversation.save();
        res.satus(200).json(savedConversation);
}catch(err){
    res.status(500).json(err);
}

});


//get conv of a user


router.get("/:userId", async (req, res) => {
    try{
         const conversation = await Conversation.find({
            members: { $in: [ req.params.userId ]},
         });

        res.status(200).json(conversation);

    }catch(err){
    res.status(500).json(err);
}
})

//conv of two user ids

router.get("/find/:firstUserId/:secondUserId", async(req, res) => {
    try{
        const conversation = await new Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId]}
        })
        res.status(200).json(conversation);
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;
