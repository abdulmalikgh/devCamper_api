const Bootcamp = require("../models/Bootcamp");
const errorResponse = require('../utils/errorResponse.js')
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

	} catch (err) {
		next(err)
	}
};

//@desc Get a bootcamp
//@route GET /api/v1/bootcamp/:id
//@access public
exports.getBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findById(req.params.id);

		if (!bootcamp) {
			return next(new errorResponse(`Bootcamp not found with id ${req.params.id}`,404))
		}
		res.status(200).json({
			success: true,
			data: bootcamp,
		});
	} catch (err) {
		next(err)
	}
};

//@desc Create bootcamp
//@route POST /api/v1/bootcamps
//@access private
exports.createBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.create(req.body);

		res.status(201).json({
			success: true,
			count: bootcamp.count,
			data: bootcamp,
		});
	} catch (err) {
		 next(err)
	}
};

//@desc Update a bootcamp
//@route PUT /api/v1/bootcamps
//@access private
exports.updateBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);

		if (!bootcamp) {
			return next(new errorResponse(`Bootcamp not found with id ${req.params.id}`,404))
		}

		res.status(200).json({
			success: true,
			data: bootcamp,
		});
	} catch (err) {
		next(err)
	}
};

//@desc delete a bootcamp
//@route DELETE /api/v1/bootcamps
//@access private
exports.deleteBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

		if (!bootcamp) {
			return next(new errorResponse(`Bootcamp not found with id ${req.params.id}`,404))
		}

		res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		next(err)
	}
};
