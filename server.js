const express = require("express");
const dotenv = require("dotenv");

const app = express();

// load env configurations

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT} `
	)
);
