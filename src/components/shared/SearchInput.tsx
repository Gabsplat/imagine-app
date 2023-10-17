"use client";

import { Input } from "@/components/ui/input";
import { capitalize } from "@/lib/utils";
import { IconSearch } from "@tabler/icons-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export default function SearchInput({ className }: { className?: string }) {
  const { slug } = useParams();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submitInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;
    if (input) {
      router.push(`/im/${input.value}`);
    }
  };

  return (
    <form onSubmit={(e) => submitInput(e)} className={className || ""}>
      <Input
        leftIcon={IconSearch}
        ref={inputRef}
        placeholder="Search high quality photos..."
        defaultValue={
          !Array.isArray(slug) ? capitalize(decodeURIComponent(slug)) : ""
        }
      />
    </form>
  );
}
