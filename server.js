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
// body-parser middle-ware
app.use(express.json());
app.use("/api/v1/bootcamps", bootcamp);
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

=======
>>>>>>> 85329949120278651ba0d1b972a20b340fa282f9
const server = app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT} `
			.yellow.bold
	)
);

// handle unhandled rejection
<<<<<<< HEAD
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);
=======

process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);

>>>>>>> 85329949120278651ba0d1b972a20b340fa282f9
	server.close(() => process.exit(1));
});
