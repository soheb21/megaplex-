const Content = require("../schema/contentSchema");

/* Get Content */

const getContent = async (req, res) => {
  try {
    const content = await Content.findOne();
    res.json(content);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

/* Save / Update */

const saveContent = async (req, res) => {
  try {
    let content = await Content.findOne();

    if (content) {
      content = await Content.findByIdAndUpdate(
        content._id,
        req.body,
        { new: true }
      );
    } else {
      content = await Content.create(req.body);
    }

    res.json(content);
  } catch {
    res.status(500).json({ message: "Save failed" });
  }
};
module.exports={getContent,saveContent};