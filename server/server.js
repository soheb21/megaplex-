const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./db/connectDB");
const contentRoutes = require("./routes/contentRoutes");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/content", contentRoutes);

// db
connectDB();

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
