"use client";

import { useState } from "react";
import API from "../services/api";

export default function ConsentToggle({ category }) {
  const [enabled, setEnabled] = useState(true);

  const toggle = async () => {
    const newState = !enabled;
    setEnabled(newState);

    await API.post("/consent", {
      category,
      status: newState ? "allowed" : "revoked"
    });
  };

  return (
    <button onClick={toggle}>
      {enabled ? "Revoke Access" : "Allow Access"}
    </button>
  );
}