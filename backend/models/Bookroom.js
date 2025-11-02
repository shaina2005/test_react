import mongoose from "mongoose";

const roomschema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    requireDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Bookroom = mongoose.model("Bookroom", roomschema);
export default Bookroom;
