import Bookroom from "../models/Bookroom.js";

export const newRoom = async (req, res) => {
  try {
    const { email, name, type, duration, requireDate } = req.body;

    if (!email || !name || !type || !duration || !requireDate) {
      return res.status(200).json({
        message: "Please fill all the details",
        success: "false",
        color: "red",
      });
    }

    let cost;
    let discount = 0;
    if (type == "day") {
      cost = duration * 2000;
    } else if (type == "hour") {
      cost = duration * 300;
    }

    if (cost >= 4000) {
      discount = cost * 0.1;
      cost = cost - discount;
    }
    const book_new_room = {
      email,
      name,
      type,
      duration,
      requireDate,
      cost,
      discount,
    };
    await Bookroom.create(book_new_room);
    res.status(200).json({
      message: "Room booked successfully",
      color: "green",
      success: "true",
    });
  } catch (error) {
    console.log("Error in newRoom backend", error.message);

    res.status(500).json({
      message: "Booking failed. Try again later",
      color: "red",
      success: "false",
    });
  }
};

export const getAllRoom = async (req, res) => {
  try {
    const { email } = req.params;
    const exists = await Bookroom.find({ email });
    if (exists.length === 0) {
      return res
        .status(200)
        .json({ message: "No booking found", color: "blue", success: "false" });
    }
    return res.status(200).json({ success: "true", exists });
  } catch (error) {
    console.log("Error in getAllroom backend", error.message);

    return res
      .status(500)
      .json({ message: "Error fetching Booked Rooms", success: false });
  }
};
