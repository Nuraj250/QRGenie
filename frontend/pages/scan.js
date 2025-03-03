import { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

// Dynamically import react-qr-scanner to prevent SSR issues
const QrScanner = dynamic(() => import("react-qr-scanner"), { ssr: false });

export default function Scan() {
    const [scanResult, setScanResult] = useState("");

    const handleScan = async (data) => {
        if (data && data.text !== scanResult) {
            setScanResult(data.text);
            try {
                await axios.post("/api/qr/scan", { data: data.text });
            } catch (error) {
                console.error("Error saving scanned data:", error);
            }
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>QR Code Scanner</h1>
            <QrScanner
                delay={300}
                onScan={handleScan}
                onError={(error) => console.error(error)}
                style={{ width: "100%" }}
            />
            {scanResult && <p>Scanned Data: {scanResult}</p>}
        </div>
    );
}
