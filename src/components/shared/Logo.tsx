import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl lg:text-4xl text-imagine-brown font-semibold"
    >
      <span className="font-bold">Imag</span>
      <span className="text-imagine-brown/60">in</span>
      <span className="font-bold">e</span>
    </Link>
  );
}
