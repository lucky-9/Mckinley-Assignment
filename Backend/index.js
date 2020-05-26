require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const config = require("config");
const bodyparser = require("body-parser");
const mongoURI = config.get("DB");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

app.use(bodyparser.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);

mongoose
  .connect(
    mongoURI || "mongodb://localhost:27017/mckinley",
    {
      useNewUrlParser: true,
      keepAlive: 1,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("CONNECTED TO DB");
    }
  )
  .catch((error) => console.log("db connection error", error));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("In Home Page...."));

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
