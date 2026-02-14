const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    //hero
    headingTop: String,
    headingHighlight: String,
    subheading: String,

    //project
    projectNameTop: String,
    projectNameBottom: String,

    //pricing
    price1Title: String,
    price1Old: String,
    price1Price: String,

    price2Title: String,
    price2Old: String,
    price2Price: String,

    address: String,

    //about
    aboutTitle: String,
    aboutText: String,

    //developer
    developerTitle: String,
    developerText: String,

    //stats
    stat1Value: String,
    stat1Label: String,

    stat2Value: String,
    stat2Label: String,

    stat3Value: String,
    stat3Label: String,

    stat4Value: String,
    stat4Label: String,

    stat5Value: String,
    stat5Label: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", contentSchema);
