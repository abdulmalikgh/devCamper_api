const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db.js");
const colors = require("colors");
const errorHandler = require("./")
// load router files
const bootcamp = require("./routes/bootcamp");
// load env configurations

dotenv.config({ path: "./config/config.env" });

connectDB();
// body-parser middle-ware
app.use(express.json());
app.use("/api/v1/bootcamps", bootcamp);
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

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
