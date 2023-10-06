"use client";

import { getRandomPhoto } from "@/lib/unsplashApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function RightSection() {
  return (
    <div className="w-2/5 rounded-lg overflow-hidden h-full">
      <img
        src="/assets/hero-img.jpg"
        className="h-full object-cover"
        alt="Picture of the author"
      />
    </div>
  );
}
