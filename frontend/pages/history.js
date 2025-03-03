import { useEffect, useState } from "react";
import axios from "axios";

export default function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get("/api/qr/history")
            .then((response) => setHistory(response.data))
            .catch((error) => console.error("Error fetching history:", error));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>QR Code History</h1>
            <ul>
                {history.map((item) => (
                    <li key={item._id}>
                        {item.type.toUpperCase()}: {item.data} - {new Date(item.createdAt).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
