//module data mongoose

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    timestamp: {
      type: String,
      unique: true,
    },
    windSpeedMax: {
      type: String,
    },
    windSpeedMin: {
      type: String,
    },
    windSpeedAvg: {
      type: String,
    },
    rainTicks: {
      type: String,
    },
    Nodo: {
      type: String,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
