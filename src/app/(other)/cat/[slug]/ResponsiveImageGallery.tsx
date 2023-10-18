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
import { useEffect, useState } from "react";
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

  const { containerRef, isInView } = useIntersectionObserver({
    threshold: 0.2,
  });
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    console.log({ isFetching });
  }, [isFetching]);

  useEffect(() => {
    if (matches !== null && !isFetching) {
      fetchNextPage();
    }
  }, [isInView]);

  {
    /* 
      Errores en el render de mobile, 
      no se por qué se hace un re-render en el componente casi como loop.

      También tengo que arreglar el isInView y todo (aunque está bastante bien..).

      Lo otro, después de un par de fetches se empieza a rellenar toda la última columna.

    */
  }

  return (
    <div className="relative">
      <h1 className="bg-orange-600 text-white font-bold sticky top-1/2 -translate-y-1/2 left-0 w-fit">
        {isInView ? "EN VISTA!" : "NOPE!"}
      </h1>
      {matches ? (
        <DesktopImageGrid data={data} isFetching={isFetching} error={error} />
      ) : (
        <MobileImageStack data={data} isFetching={isFetching} error={error} />
      )}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="opacity-0 absolute left-0 bottom-1/4 h-20 w-full"
      >
        visual-helper
      </div>
    </div>
  );
}
