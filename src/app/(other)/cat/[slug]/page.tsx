import ResponsiveImageGallery from "./ResponsiveImageGallery";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <main>
      <ResponsiveImageGallery slug={slug} />
    </main>
  );
}
