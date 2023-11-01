"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { Image, PaginatedImages } from "@/lib/unsplash";
import { getPaginatedImages } from "@/lib/unsplash";
import { ColImages } from "@/lib/utils";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "@tanstack/react-query";

import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import DesktopImageGrid from "./DesktopImageGrid";
import MobileImageStack from "./MobileImageStack";

export default function ResponsiveImageGallery({ slug }: { slug: string }) {
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
  const matches = useMediaQuery("(min-width: 768px)");

  {
    /* 
      Errores en el render de mobile, 
      no se por qué se hace un re-render en el componente casi como loop.


    */
  }

  return (
    <div className="">
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
    </div>
  );
}
