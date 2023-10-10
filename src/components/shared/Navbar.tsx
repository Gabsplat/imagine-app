"use client";

import {
  IconArrowsShuffle2,
  IconCategory,
  IconInfoCircle,
} from "@tabler/icons-react";
import React from "react";
import IconLinkTooltip from "./IconLinkTooltip";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-20 h-24 w-full">
      <Logo />
      <SearchInput className="flex-1" />
      <div className="flex items-center gap-8">
        <IconLinkTooltip
          href="/categories"
          text="Random picture"
          icon={IconArrowsShuffle2}
        />
        <IconLinkTooltip href="/" text="Categories" icon={IconCategory} />
        <IconLinkTooltip href="/" text="Project info" icon={IconInfoCircle} />
      </div>
    </div>
  );
}
