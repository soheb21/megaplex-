const Content = require("../schema/contentSchema");

// GET content
const getContent = async (req, res) => {
  try {
    let content = await Content.findOne();

    if (!content) {
      content = await Content.create({});
    }

    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE content
const updateContent = async (req, res) => {
  try {
    const updated = await Content.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContent,
  updateContent,
};
