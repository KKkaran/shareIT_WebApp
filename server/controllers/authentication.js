const bcrypt = require("bcrypt");
const User = require("../schemas/User");

const handleNewUser = async (req, res) => {
  const { email, password, firstName } = req.body;

  if (!email || !password || !firstName) {
    return res
      .status(400)
      .json({ message: "Username, Password and First Name are required!" });
  }
  //check for duplicates
  const duplicate = await User.findOne({ email: email }).exec();
  if (duplicate) return res.sendStatus(409);
  try {
    const hashedPasswd = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName: firstName,
      email: email,
      password: hashedPasswd,
    });
    console.log(result);
    res.status(201).json({ success: `New User ${user} created.` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      res.status(200).json({ count: users.length || 0, data: users });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = () => {};

module.exports = {
  handleNewUser,
  loginUser,
  getAllUsers,
};
