"use client";

import { Input } from "@/components/ui/input";
import { capitalize } from "@/lib/utils";
import { IconSearch } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export default function SearchInput({
  className,
  defaultValue,
}: {
  className?: string;
  defaultValue?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const search =
    pathname.split("/").length > 2 ? capitalize(pathname.split("/")[2]) : "";

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
        defaultValue={search}
      />
    </form>
  );
}
