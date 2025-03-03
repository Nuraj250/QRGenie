import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#eee" }}>
            <Link href="/">Home</Link> | <Link href="/scan">Scan</Link> | <Link href="/history">History</Link>
        </nav>
    );
}
