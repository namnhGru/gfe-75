import React, { useState, useEffect } from "react";

function ProgressBar() {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    if (startTransition) {
      return;
    }
    setStartTransition(true);
  }, []);

  return (
    <div className="progress-bar">
      <div
        className={`progress-bar-fill ${startTransition && "progress-bar-fill--filled"}`}
      ></div>
    </div>
  );
}

export default function App() {
  const [progressNumber, setProgressNumber] = useState(0);
  return (
    <div>
      <button onClick={() => setProgressNumber((prev) => prev + 1)}>Add</button>
      {Array.from({ length: progressNumber }).map((a) => {
        return <ProgressBar />;
      })}
    </div>
  );
}
