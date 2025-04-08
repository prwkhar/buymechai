// models/Donation.js
import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: { type: Number, required: true },
    donorName: String, // optional
    donorEmail: String, // optional
    message: String, // optional
  },
  { timestamps: true }
);

export default mongoose.models.Donation || mongoose.model("Donation", donationSchema);
