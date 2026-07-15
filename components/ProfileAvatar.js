/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_NAME_PRIMARY } from "@/lib/constants";

export default function ProfileAvatar() {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
      setImgFailed(true);
    }
  }, []);

  return (
    <div
      className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center overflow-hidden shrink-0"
      style={{ backgroundColor: "#141414", border: "1px solid #1F1F1F" }}
    >
      {!imgFailed ? (
        <img
          ref={imgRef}
          src="/profile.jpg"
          alt={`${SITE_NAME_PRIMARY} 프로필 사진`}
          className="w-full h-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span
          className="text-6xl font-bold"
          style={{ color: "#10B981", fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          {SITE_NAME_PRIMARY.charAt(0)}
        </span>
      )}
    </div>
  );
}
