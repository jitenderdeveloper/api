const express = require("express");
const router = express.Router();
const MediaServices = require("../modules/MediaServices");

router.get("/contact", (req, res) => {
  try {
    MediaServices.find().then((result) => {
      res.status(201).json({
        status: "success",
        message: "MediaXpediaServices all client data",
        MediaXpediaServices: result,
      });
    });
  } catch (error) {
    res.status(201).json({
      status: "failed",
      message: "GET api is not working!",
    });
  }
});



router.post("/contact", (req, res) => {
  try {
    const media = MediaServices({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      description: req.body.description,
    });
    media.save().then((result) => {
      res.status(201).json({
        status: "success",
        message:
          "Thankyou for connecting with us. We will get back to you soon :) ",
        MediaXpediaServices: result,
      });
    });
  } catch (error) {
    res.status(201).json({
      status: "failed",
      message: "POST api is not working!",
    });
  }
});




// router.post("/contact", (req, res) => {
//   try {
//     const MediaServices = MediaServices({
//       name: req.body.name,
//       phone: req.body.phone,
//       email: req.body.email,
//       description: req.body.description,
//     })
//     MediaServices.save().then((result) => {
//       res.status(201).json({
//         status: "success",
//         message: "Thankyou for connecting with us. We will get back to you soon :) ",
//         MediaXpediaServices: result,
//       });
//     });
//   } catch (error) {
//     res.status(201).json({
//       status: "failed",
//       message: "POST api is not working!"
//     });
//   }
// });

module.exports = router;
