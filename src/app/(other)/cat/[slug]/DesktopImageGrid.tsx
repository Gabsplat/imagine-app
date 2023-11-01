import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Image, PaginatedImages } from "@/lib/unsplash";
import { ColImages } from "@/lib/utils";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";

export type ImageDataProps = {
  data: InfiniteData<PaginatedImages> | undefined;
  isFetching: boolean;
  error: unknown;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<PaginatedImages, unknown>>;
};
export default function DesktopImageGrid({
  data,
  isFetching,
  error,
  fetchNextPage,
}: ImageDataProps) {
  const { containerRef, isInView } = useIntersectionObserver({
    threshold: 0.1,
  });

  const [imageCols, setImageCols] = useState<ColImages>({
    col1: null,
    col2: null,
    col3: null,
  });

  useEffect(() => {
    console.log("DATA:", { data });
    if (!error && !isFetching && data) {
      let col1: Image[] = [],
        col2: Image[] = [],
        col3: Image[] = [];
      data.pages.forEach(({ images }) => {
        let amountImages = images.length;
        let firstColsLength = Math.floor(amountImages / 3);
        col1 = [...col1, ...images.slice(0, firstColsLength)];
        col2 = [...col2, ...images.slice(firstColsLength, firstColsLength * 2)];
        col3 = [
          ...col3,
          ...images.slice(firstColsLength * 2, amountImages + 1),
        ];
      });
      setImageCols({ col1, col2, col3 });
    }
  }, [data]);

  useEffect(() => {
    console.info({ isInView });
    if (isInView) {
      fetchNextPage();
    }
  }, [isInView]);

  return (
    <div className="grid grid-cols-3 grid-rows-[auto_1fr] gap-4 min-h-[200vh] w-full relative">
      <div className="text-black left-2 top-2 fixed z-50">
        <h2>Stats</h2>
        <ul>
          <li>Col 1:{imageCols.col1?.length}</li>
          <li>Col 2:{imageCols.col2?.length}</li>
          <li>Col 3:{imageCols.col3?.length}</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        {imageCols.col1
          ? imageCols.col1.map((img, index) => {
              if (img.width < img.height) {
                return (
                  <img
                    key={img.urls?.regular + "@index" + index}
                    src={img.urls?.regular}
                    className="w-full object-cover h-[30rem] rounded-lg"
                    alt=""
                  />
                );
              }

              return (
                <img
                  key={img.urls?.regular + "@index" + index}
                  src={img.urls?.regular}
                  className="w-full h-72 object-cover rounded-lg"
                  alt=""
                />
              );
            })
          : null}
      </div>
      <div className="flex flex-col gap-4">
        {imageCols.col2
          ? imageCols.col2.map((img: Image, index) => {
              if (img.width < img.height) {
                return (
                  <img
                    key={img.urls?.regular + "@index" + index}
                    src={img.urls?.regular}
                    className="w-full object-cover h-[30rem] rounded-lg"
                    alt=""
                  />
                );
              }

              return (
                <img
                  key={img.urls?.regular + "@index" + index}
                  src={img.urls?.regular}
                  className="w-full h-72 object-cover rounded-lg"
                  alt=""
                />
              );
            })
          : null}
      </div>
      <div className="flex flex-col gap-4">
        {imageCols.col3
          ? imageCols.col3.map((img, index) => {
              if (img.width < img.height) {
                return (
                  <img
                    key={img.urls?.regular + "@index" + index}
                    src={img.urls?.regular}
                    className="w-full object-cover h-[30rem] rounded-lg"
                    alt={img.description}
                  />
                );
              }

              return (
                <img
                  src={img.urls?.regular}
                  key={img.urls?.regular + "@index" + index}
                  className="w-full h-72 object-cover rounded-lg"
                  alt={img.description}
                />
              );
            })
          : null}
      </div>
      {/* Infinite Query Div */}
      <div
        ref={containerRef}
        className="absolute bottom-0 left-0 h-1/4 w-full opacity-0"
      ></div>
    </div>
  );
}
