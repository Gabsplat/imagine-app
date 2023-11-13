import ImageDialog from "../../ImageDialog";
import ResponsiveImageGallery from "./ResponsiveImageGallery";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <main className="mt-2">
      {/* <ImageDialog /> */}
      <ResponsiveImageGallery slug={slug} />
    </main>
  );
}
