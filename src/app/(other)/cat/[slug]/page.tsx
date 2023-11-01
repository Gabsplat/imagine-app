import { Suspense } from "react";
import ResponsiveImageGallery from "./ResponsiveImageGallery";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <main className="mt-2">
      <ResponsiveImageGallery slug={slug} />
    </main>
  );
}
