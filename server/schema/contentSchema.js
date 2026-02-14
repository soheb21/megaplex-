const mongoose = require("mongoose");

/* Website Content Schema */

const contentSchema = new mongoose.Schema(
  {
    headingTop: String,
    headingHighlight: String,
    subheading: String,

    projectNameTop: String,
    projectNameBottom: String,

    price1Title: String,
    price1Old: String,
    price1Price: String,

    price2Title: String,
    price2Old: String,
    price2Price: String,

    address: String,

    aboutTitle: String,
    aboutText: String,

    developerTitle: String,
    developerText: String,

    /* Developer Stats */

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

    /* Construction Updates (Text Only) */

    constructionUpdates: [
      {
        title: String
      }
    ],

    /* FAQs */

    faqs: [
      {
        question: String,
        answer: String
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", contentSchema);
