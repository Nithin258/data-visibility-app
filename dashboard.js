"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";
import DataCard from "../../components/DataCard";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await API.get("/data");
    const act = await API.get("/activity");

    setData(res.data);
    setActivity(act.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Personal Data Dashboard</h1>

      <h2>Your Data</h2>

      {data.map((item) => (
        <DataCard key={item.id} data={item} />
      ))}

      <h2>Recent Activity</h2>

      {activity.map((a) => (
        <p key={a.id}>{a.action}</p>
      ))}
    </div>
  );
}