const Bootcamp = require("../models/Bootcamp");
//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access public
exports.getBootcamps = async (req, res, next) => {
	try {
		const bootcamps = await Bootcamp.find();

		res.status(200).json({
			success: true,
			data: bootcamps,
		});
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

//@desc Get a bootcamp
//@route GET /api/v1/bootcamp/:id
//@access public
exports.getBootcamp = (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findById(req.params.id)

		res.status(200).json({
			success: true,
			data: bootcamp
		})

	} catch (error) {

		res.status(400).json({
			success: false,
		})
		
	}
};

//@desc Create bootcamp
//@route POST /api/v1/bootcamps
//@access private
exports.createBootcamp = async (req, res, next) => {
	const bootcamp = await Bootcamp.create(req.body);

	res.status(201).json({
		success: true,
		data: bootcamp,
	});
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
