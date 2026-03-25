import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Personal Data Wallet</h1>
      <p>Understand and control your digital data.</p>

      <Link href="/dashboard">
        <button>Open Dashboard</button>
      </Link>
    </div>
  );
}