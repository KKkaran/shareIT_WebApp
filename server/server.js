// this is the server file
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use('/v1/home', require('./routes/public/authentication'))
app.use("/v1/users", require("./routes/secure/users"));
app.use("/v1/purchases", require("./routes/secure/purchases"));
app.use("/v1/homes", require("./routes/secure/homes"));

// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "default-src 'self' http://10.0.0.172:4000"
//   );
//   next();
// });
// const whitelist = [
//   "http://10.0.0.172:3000",
// ]; // last 2 will be removed when deploying
// const corsOptions = {
//     origin: (origin, callback) => {
//         console.log(origin)
//     if (whitelist.indexOf(origin) !== -1) {
//       console.log("good");
//       callback(null, true);
//     } else {
//       console.log("not good");
//       callback(new Error("Not allowed by CORS!"));
//     }
//   },
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// routes go below


app.get(
  "/*",
  (req, res, next) => {
    res.status(404).send("Please check the route and try again.");
    next();
  },
  (req, res) => {
    console.log("user entered invalid url");
  }
);

//listening on PORT
app.listen(PORT, function () {
  console.log(`app running on ${PORT} port`);
});
