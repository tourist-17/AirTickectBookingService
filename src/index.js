const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
// const db = require("./models/index");
// const { BookingRepository } = require("./repository/index");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server Started on port ${PORT}`);
    // const bookingRepository = new BookingRepository();
    // const response = await bookingRepository.create({
    //   flightId: "8",
    //   userId: "3",
    //   noOfSeats: "3",
    //   totalCost: "500",
    // });
    // console.log(response);
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }
  });
};

setupAndStartServer();
