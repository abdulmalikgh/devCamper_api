const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
	res.status(200).json({
		success: true,
		msg: `Show bootcamps ${req.params.id}`,
	});
});

router.post("/", (req, res) => {
	res.status(201).json({ success: true, msg: "Create new bootcamp" });
});

router.put("/:id", (req, res) => {
	res.status(200).json({
		success: true,
		msg: `Update bootcamps ${req.params.id}`,
	});
});

router.get("/:id", (req, res) => {
	res.status(200).json({
		success: true,
		msg: `Bootcamp deleted ${req.param.id}`,
	});
});

module.exports = router;
