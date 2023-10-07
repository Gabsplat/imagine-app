"use client";

import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SearchInput() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const input = inputRef.current;
        if (input) {
          router.push(`/im/${input.value}`);
        }
      }}
    >
      <Input
        leftIcon={IconSearch}
        className="mt-3"
        ref={inputRef}
        placeholder="Search high quality photos..."
      />
    </form>
  );
}
