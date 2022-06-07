const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/shop"));
app.use("/", require("./routes/product"));

app.listen(4000, () => {
  console.log("Server is running on port: " + PORT);
});
