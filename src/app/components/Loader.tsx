"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200); // 1.2s premium

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center animate-fadeScale">

        {/* Logo Latalia */}
        <Image
          src="/logo-healthy-home.png"
          alt="Latalia Propreté"
          width={90}
          height={90}
          className="drop-shadow-xl"
        />

        {/* Barre animée */}
        <div className="mt-6 h-1.5 w-32 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full w-full bg-[#54beea] animate-loaderBar" />
        </div>
      </div>
    </div>
  );
}
