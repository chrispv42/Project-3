// src/components/WorldClock.jsx
import React, { useEffect, useState } from 'react';

export default function WorldClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="card">
        <h2>Today</h2>
        <p className="muted">{now.toLocaleString()}</p>
      </div>
    </>
  );
}
