const router = require("express").Router();
const User = require("../models/Users");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,

    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC_KEY
    ).toString(),

    isAdmin: req.body.isAdmin,
    phoneNumber: req.body.phoneNumber,
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/logIn", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (user == null) {
      res.status(401).json(" Wrong UserName or password !!");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC_KEY
      );

      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      const inputPassword = req.body.password;
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC_key,
        { expiresIn: "3d" }
      );
      const { password, ...others } = user._doc;

      if (inputPassword !== originalPassword) {
        res.status(401).json("Wrong UserName or password !!");
      } else {
        res.status(201).json({ ...others, accessToken });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
