"use client";

import ImageGrid from "./ImageGrid";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="">
      <ImageGrid slug={slug} />
    </div>
  );
}
