const express = require("express");
const { generateQRCode, scanQRCode, getQRHistory } = require("../controllers/qrController");

const router = express.Router();

router.post("/generate", generateQRCode);
router.post("/scan", scanQRCode);
router.get("/history", getQRHistory);

module.exports = router;
