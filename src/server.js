const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = requrie("morgan");
const cors = require("cors");

require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });

const corsOptions = {};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan(dev));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Running on port:${port} and enviroment ${process.env.NODE_ENV}`)
);
