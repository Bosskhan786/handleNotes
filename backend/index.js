const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;

const helmet = require("helmet");
const cors = require("cors");

const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const { connectToMongoDb } = require("./connections");
const app = express();

// Security
app.use(helmet());

// Connection
connectToMongoDb(process.env.MONGO_URL)
.then(() => console.log("MongoDb connected..."))
.catch((err) => console.log(err));

// Middlewares
app.use(express.json());

app.use(cors());

// Routes
app.use("/notes", noteRouter);
app.use("/", userRouter);

app.listen(PORT, () => console.log("Server started at PORT:", PORT));