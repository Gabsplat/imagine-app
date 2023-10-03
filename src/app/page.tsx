import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden flex flex-col">
      <div className="h-1/2 w-full pl-24 relative">
        <div className="absolute -bottom-2 w-full">
          <h1 className="text-3xl font-bold mb-2">
            Beautiful free images, for free.
          </h1>
          <Input placeholder="Search images..." className=" w-1/3" />
        </div>
      </div>
      <img
        src="/imgs/hero.jpg"
        className="h-1/2 w-full object-cover object-center"
      />
    </main>
  );
}
