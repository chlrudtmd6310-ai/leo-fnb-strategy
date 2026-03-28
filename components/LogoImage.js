"use client";

import { useState } from "react";

export default function LogoImage() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="w-full max-w-xs aspect-square rounded-2xl flex items-center justify-center"
      style={{ backgroundColor: "#111111", border: "1px solid #1F1F1F" }}
    >
      {!imgFailed ? (
        <img
          src="/images/covers/logo.png"
          alt="Leo Insight 로고"
          className="w-48 h-48 object-contain"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <p
            className="text-5xl md:text-6xl leading-tight"
            style={{
              color: "#F5F5F5",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Leo
          </p>
          <p
            className="text-5xl md:text-6xl leading-tight"
            style={{
              color: "#F5F5F5",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            insight
          </p>
        </div>
      )}
    </div>
  );
}
