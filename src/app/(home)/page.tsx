import ImageDisplaySection from "@/components/pages/root/ImageDisplaySection";
import SearchSection from "@/components/pages/root/SearchSection";

export default async function Home() {
  return (
    <main className="h-screen gap-32 flex">
      <SearchSection />
      <ImageDisplaySection />
    </main>
  );
}
