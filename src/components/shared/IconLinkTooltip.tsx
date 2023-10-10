import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function IconLinkTooltip({
  icon: Icon,
  href,
  text,
}: {
  icon: React.ElementType;
  href: string;
  text: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={href}>
            <Icon size={28} className="text-imagine-brown" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <span>{text}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
