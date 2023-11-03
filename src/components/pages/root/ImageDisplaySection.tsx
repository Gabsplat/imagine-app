"use client";

import { getRandomPhoto } from "@/lib/unsplash";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function ImageDisplaySection() {
  return (
    <div className="w-2/5 opacity-50 h-full overflow-hidden grid grid-cols-2 grid-rows-[repeat(8,minmax(0,1fr))] gap-10">
      <img
        src="/assets/hero-img.jpg"
        className="h-full row-span-3 rounded-br-xl rounded-tl-none rounded-bl-[15rem] object-cover"
        alt="Picture of the author"
      />
      <img
        src="/assets/hero-img.jpg"
        className="h-full row-span-3 rounded-bl-xl object-cover"
        alt="Picture of the author"
      />
      <img
        src="/assets/hero-img.jpg"
        className="h-full w-full row-span-2 rounded-bl-[8rem] rounded-xl rounded-tl-none object-cover"
        alt="Picture of the author"
      />
      <img
        src="/assets/hero-img.jpg"
        className="h-full w-full row-span-2 rounded-l-xl object-cover"
        alt="Picture of the author"
      />
      <img
        src="/assets/hero-img.jpg"
        className="h-full row-span-3 rounded-tl-[13rem] rounded-tr-xl object-cover"
        alt="Picture of the author"
      />
      <img
        src="/assets/hero-img.jpg"
        className="h-full row-span-3 rounded-l-full object-cover"
        alt="Picture of the author"
      />
    </div>
  );
}
