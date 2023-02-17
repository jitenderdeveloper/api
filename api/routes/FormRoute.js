const express = require("express");
const router = express.Router();
const FormData = require('../modules/FormSchema');


router.get('/', (req, res) =>{
    try {
        FormData.find()
        .then((result) =>{
            res.status(200).json({
                message: 'Done...',
                All_data: result
            })
        })
    } catch (error) {
        res.send('worng')
    }
})

router.post("/", (req, res) => {
    try {
      const form_data = new FormData({
        boy: req.body.boy,
        girl: req.body.girl,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        other_phone: req.body.other_phone,
        country: req.body.country,
        state: req.body.state,
        address: req.body.address,
        city: req.body.city,
        pin_code: req.body.pin_code,
      });
      form_data.save().then((result) => {
        console.log("form data ->",result)
        res.status(200).json({
          message: "Data is successfully Done..",
          FormData: result,
        });
      });
    } catch (error) { }
  });

module.exports = router;