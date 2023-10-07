import TestCall from "@/components/pages/TestCall";
import LeftSection from "@/components/pages/root/LeftSection";
import RightSection from "@/components/pages/root/RightSection";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="h-screen gap-32 flex">
      <LeftSection />
      <RightSection />
    </main>
  );
}
