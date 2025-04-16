import StarRating from "./StarRating";
import React, { useState } from "react";

export default function App() {
  const [curStar, setCurStar] = useState(0);
  return (
    <div>
      <StarRating maxStar={5} curStar={curStar} onChange={setCurStar} />
    </div>
  );
}
