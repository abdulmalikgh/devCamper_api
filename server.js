const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db.js");
const colors = require("colors");
// load router files
const bootcamp = require("./routes/bootcamp");
// load env configurations

dotenv.config({ path: "./config/config.env" });

connectDB();

app.use("/api/v1/bootcamps", bootcamp);
const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT} `
			.yellow.bold
	)
);

// handle unhandled rejection

process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);

	server.close(() => process.exit(1));
});
