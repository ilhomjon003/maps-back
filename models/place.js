import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  place: {
    place_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    isOpenNow: {
      type: Boolean,
      required: true,
    },
    working_hours: {
      type: String,
      required: false,
    },
    place_type: {
      type: String,
      required: false,
    },
  },
  fuel: {
    fuel_types: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: [String, Number],
          required: true,
        },
        isAvailable: {
          type: Boolean,
          required: true,
        },
      },
    ],
    price: {
      type: [String, Number],
      required: false,
    },
    limit: {
      type: String,
      required: false,
    },
  },
  discount: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Place", placeSchema);
