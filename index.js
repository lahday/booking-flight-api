const express = require("express");
const bodyParser = require("body-parser");
 
const flight = require("./routes/flightRoute");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.use("/flight", flight)
 

const port = process.env.PORT || 3000;

app.get("/", (req, res) =>
{ 
  res.send ("Flight Task");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
