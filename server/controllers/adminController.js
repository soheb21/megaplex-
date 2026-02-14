const adminSchema = require("../schema/adminSchema");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check email
    // await adminSchema.create(req.body);

    const admin = await adminSchema.findOne({ email });
    console.log({ admin });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email",
      });
    }

    if (admin.password !== password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    res.json({
      message: "Login successful",
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
module.exports = loginAdmin;
