const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost/PubCrawl", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/bars", require("./routes/apiRoutes"));

app.use("/users", require("./routes/userRoutes"));

app.use("/register", require("./routes/confirmRoutes"));

app.use("/local_bars", require("./routes/beerRoutes"));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`connected to http://localhost:${PORT}`));
