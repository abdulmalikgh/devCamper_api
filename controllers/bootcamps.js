//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

//@desc Get a bootcamp
//@route GET /api/v1/bootcamp/:id
//@access public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Show bootcamps ${req.params.id}`,
	});
};

//@desc Create bootcamp
//@route POST /api/v1/bootcamps
//@access private
exports.createBootcamp = (req, res, next) => {
	res.status(201).json({ success: true, msg: "Create new bootcamp" });
};

//@desc Update a bootcamp
//@route PUT /api/v1/bootcamps
//@access private
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Update bootcamps ${req.params.id}`,
	});
};

//@desc delete a bootcamp
//@route DELETE /api/v1/bootcamps
//@access private
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Bootcamp deleted ${req.param.id}`,
	});
};
