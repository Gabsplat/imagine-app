"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { getPaginatedImages } from "@/lib/unsplash";
import { useInfiniteQuery } from "@tanstack/react-query";

import { IconLoader, IconLoader2, IconLoader3 } from "@tabler/icons-react";
import { useEffect } from "react";
import DesktopImageGrid from "./DesktopImageGrid";
import MobileImageStack from "./MobileImageStack";

export default function ResponsiveImageGallery({ slug }: { slug: string }) {
  const matches = useMediaQuery("(min-width: 768px)");
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: ({ pageParam = 1 }) => getPaginatedImages({ slug, pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <section>
      {!data && isFetching && !error ? (
        <div className="h-full w-full flex items-center justify-center">
          <IconLoader2 size={25} className="animate-spin text-gray-400" />
        </div>
      ) : null}
      {error ? <p>No images found</p> : null}
      {matches && data ? (
        <DesktopImageGrid
          fetchNextPage={fetchNextPage}
          data={data}
          isFetching={isFetching}
          error={error}
        />
      ) : (
        <MobileImageStack
          fetchNextPage={fetchNextPage}
          data={data}
          isFetching={isFetching}
          error={error}
        />
      )}
    </section>
  );
}
