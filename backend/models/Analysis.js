import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema({

  url: {
    type: String,
    required: true,
    unique: true
  },

  score: Number,

  credibilidade: String,

  detalhes: Object,

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400
  }

});

export default mongoose.model("Analysis", analysisSchema);