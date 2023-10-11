"use client";

import {
  IconArrowsShuffle2,
  IconCategory,
  IconInfoCircle,
  IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import IconTooltip from "./IconTooltip";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-20 py-8 w-full">
      <div className="flex flex-row items-center lg:justify-between flex-1 w-full gap-4 lg:gap-0">
        <Logo />
        <SearchInput className="flex-1 lg:ml-20" />
        <button onClick={() => setIsMenuOpen((state) => !state)}>
          <IconMenu2 className="lg:hidden" />
        </button>
      </div>
      <ul
        className={`
          ${isMenuOpen ? "flex" : "hidden lg:flex"}
          flex-col lg:flex-row items-center justify-center gap-10
          w-full lg:w-auto py-4 lg:p-0 border lg:border-none border-input/50 rounded-md
        `}
      >
        <NavLink
          href="/random"
          text="Random picture"
          icon={IconArrowsShuffle2}
        />
        <NavLink href="/categories" text="Categories" icon={IconCategory} />
        <NavLink href="/info" text="Project info" icon={IconInfoCircle} />
      </ul>
    </nav>
  );
}

type NavLink = {
  href: string;
  icon: React.ElementType;
  text: string;
  tooltipText?: string;
};

const NavLink = ({ href, icon, text, tooltipText }: NavLink) => {
  return (
    <li>
      <Link href={href} className="flex gap-2">
        <IconTooltip
          href="/categories"
          text={tooltipText ? tooltipText : text}
          icon={icon}
        />
        <span className="lg:hidden text-md text-imagine-brown font-medium py-1">
          {text}
        </span>
      </Link>
    </li>
  );
};
