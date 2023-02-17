const express = require("express");
const router = express.Router();
const MeetingForm = require("../modules/mettingSchema");

router.get("/", (req, res) => {
  try {
    MeetingForm.find().then((result) => {
      res.status(200).json({
        message: "Done...",
        All_data: result,
      });
    });
  } catch (error) {
    res.send("worng");
  }
});

router.post("/", (req, res) => {
  try {
    const metting_form = new MeetingForm({
      name: req.body.name,
      email: req.body.email,
      schedule: req.body.schedule,
      description: req.body.description,
    });
    metting_form.save().then((result) => {
      console.log("form data ->", result);
      res.status(200).json({
        message: "Data is successfully Done..",
        MeetingForm: result,
      });
    });
  } catch (error) {
    message: error;
  }
});

module.exports = router;
