const QRCode = require("../models/QRCode");

// Generate and store a QR code
exports.generateQRCode = async (req, res) => {
    try {
        const { data } = req.body;
        if (!data) return res.status(400).json({ error: "Data is required" });

        const qrCode = new QRCode({ data, type: "generated" });
        await qrCode.save();

        res.status(201).json(qrCode);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Store a scanned QR code
exports.scanQRCode = async (req, res) => {
    try {
        const { data } = req.body;
        if (!data) return res.status(400).json({ error: "Data is required" });

        const qrCode = new QRCode({ data, type: "scanned" });
        await qrCode.save();

        res.status(201).json(qrCode);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get QR code history
exports.getQRHistory = async (req, res) => {
    try {
        const history = await QRCode.find().sort({ createdAt: -1 });
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
