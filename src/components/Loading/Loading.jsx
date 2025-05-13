import React, { useState, useEffect } from 'react';
import './Loading.css';

export default function Loading() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loader-text">S5 Studios</div>
      <div className="loader-progress">
        <div className="loader-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}