const { BookingService } = require("../services/index");
const bookingService = new BookingService();
const { StatusCodes } = require("http-status-codes");

const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    return res.status(StatusCodes.OK).json({
      message: "Successfully Completed booking",
      success: true,
      err: {},
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
      err: error.explanation,
      data: {},
    });
  }
};

module.exports = { create };
