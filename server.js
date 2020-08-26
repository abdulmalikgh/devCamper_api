const express = require("express");
const dotenv = require("dotenv");

const app = express();

// load router files
const bootcamp = require("./routes/bootcamp");
// load env configurations

dotenv.config({ path: "./config/config.env" });

app.use("/api/v1/bootcamps", bootcamp);
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT} `
	)
);
