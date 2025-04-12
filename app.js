const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./App/routes/studentRoute");
const todoRouter = require("./App/routes/todoRoutes");
require("dotenv").config();
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

// Make flash messages available to all views
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.delete_msg = req.flash("delete_msg");
  next();
});
app.use(studentRouter);
app.use(todoRouter);

const PORT = 3009;

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
