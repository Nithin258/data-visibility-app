import ConsentToggle from "./ConsentToggle";

export default function DataCard({ data }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8
      }}
    >
      <h3>{data.name}</h3>
      <p>Value: {data.value}</p>
      <p>Risk: {data.risk}</p>

      <ConsentToggle category={data.name} />
    </div>
  );
}