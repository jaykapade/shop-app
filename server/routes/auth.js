const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//* Register User
router.post("/register", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
    // TODO: if you get time set isAdmin field here/
  });
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
    console.log(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* Login User
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials");

    const hashedPwd = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    const dbPassword = hashedPwd.toString(CryptoJS.enc.Utf8);

    dbPassword !== req.body.password &&
      res.status(401).json("Wrong Credentials");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
