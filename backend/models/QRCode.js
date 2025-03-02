const mongoose = require("mongoose");

const QRCodeSchema = new mongoose.Schema(
    {
        data: { type: String, required: true },
        type: { type: String, enum: ["generated", "scanned"], required: true },
        createdAt: { type: Date, default: Date.now },
    }
);

module.exports = mongoose.model("QRCode", QRCodeSchema);
