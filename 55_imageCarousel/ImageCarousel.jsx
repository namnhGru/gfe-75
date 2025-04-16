import React, { useState } from "react";
export default function ImageCarousel({
  images
}) {
  const [curPic, setCurPic] = useState(0);

  function handleBack() {
    setCurPic((prev) => {
      return prev !== 0 ? prev - 1 : images.length - 1;
    });
  }
  function handleForward() {
    setCurPic((prev) => {
      return prev !== images.length - 1 ? prev + 1 : 0;
    });
  }
  return (
    <div>
      <div className="carousel-gallery">
        {images.map(({ alt, src }, idx) => (
          <img
            key={src}
            alt={alt}
            src={src}
            width="100%"
            style={{ display: idx === curPic ? "block" : "none" }}
          />
        ))}
        <button className="carousel-back-btn" onClick={handleBack}>
          {"<"}
        </button>
        <div className="carousel-pagination">
          {images.map((btn, idx) => (
            <button
              className="carousel-page"
              onClick={() => setCurPic(idx)}
            ></button>
          ))}
        </div>
        <button className="carousel-fwd-btn" onClick={handleForward}>
          {">"}
        </button>
      </div>
    </div>
  );
}
