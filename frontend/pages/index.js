import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";

export default function Home() {
    const [text, setText] = useState("");
    const [qrData, setQrData] = useState(null);

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

    const generateQRCode = async () => {
        if (!text) return;
        console.log("API Base URL:", API_BASE); // Debugging
        try {
            const response = await axios.post(`${API_BASE}/api/qr/generate`, { data: text });
            setQrData(response.data.data);
        } catch (error) {
            console.error("Error generating QR:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                placeholder="Enter text or URL"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={generateQRCode}>Generate QR</button>
            {qrData && (
                <div>
                    <QRCodeCanvas value={qrData} size={200} />
                    <p>{qrData}</p>
                </div>
            )}
        </div>
    );
}
