"use client"; // <-- CAMBIAR

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      Page not found, return <Link href="/">home.</Link>
    </div>
  );
}
