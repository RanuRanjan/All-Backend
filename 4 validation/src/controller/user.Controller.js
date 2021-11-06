const express = require("express");

const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../model/user.model");

router.post(
  "/",
  body("first_name").isLength({ min: 3 }).withMessage("first name  is required ,in length 3"),
  body("last_name").isLength({min:1}).withMessage("last  is required"),
  body("email").isLength({min:1}).withMessage("email is required must be a valid email"),
  body("pin").isLength({min:1, max:6}).withMessage("pin is required and must be min length 1 and max length 6"),
  body("age").isLength({min:1, max:100}).withMessage("age  is required"),
  body("gender").isLength({min:3}).withMessage("gender  is required"),
  async (req, res) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
            return res.status(400).json({data:errors.array()});
    }
    const user = await User.create(req.body);
    res.status(201).json({ data: user });
  }
);

module.exports = router;
