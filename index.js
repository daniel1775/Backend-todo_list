const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3030;
const CONNECTION = process.env.MONGODB_URI || "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2hx98.mongodb.net/flores_tamba?retryWrites=true&w=majority";
const app = express();

const todoRoutes = require("./routes/todoRoutes");

mongoose.connect(CONNECTION)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);


app.listen(PORT, () => {
  console.log("The server is listening on port "+ PORT);
});

/* 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/todolist", connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});
*/