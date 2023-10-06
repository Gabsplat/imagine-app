import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import Categories from "./Categories";

export default function LeftSection() {
  return (
    <div className="flex-1 h-full">
      <h1 className="text-4xl text-primary font-bold">Imagine</h1>
      <Input
        leftIcon={IconSearch}
        className="mt-3"
        placeholder="Search high quality photos..."
      />
      <Categories />
    </div>
  );
}
