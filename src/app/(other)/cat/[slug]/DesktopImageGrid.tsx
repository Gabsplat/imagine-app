import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Image, PaginatedImages } from "@/lib/unsplash";
import { ColImages } from "@/lib/utils";
import { IconDownload, IconEye, IconHeart } from "@tabler/icons-react";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageDialog from "../../ImageDialog";

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
    if (!error && data) {
      let col1: Image[] = [],
        col2: Image[] = [],
        col3: Image[] = [];
      data.pages.forEach(({ images }) => {
        col1 = [...col1, ...images.slice(0, 4)];
        col2 = [...col2, ...images.slice(4, 8)];
        col3 = [...col3, ...images.slice(8, 12)];
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
      {/* <div className="text-black left-2 top-2 fixed z-50">
        <h2>Stats</h2>
        <ul>
          <li>Image Cols State: {JSON.stringify(imageCols)}</li>
          <li>Image Col 1: {JSON.stringify(imageCols.col1)}</li>
          <li>Image Col 2: {JSON.stringify(imageCols.col2)}</li>
          <li>Col 1:{imageCols.col1?.length}</li>
          <li>Col 2:{imageCols.col2?.length}</li>
        </ul>
      </div> */}
      <div className="flex flex-col gap-4">
        {imageCols.col1
          ? imageCols.col1.map((img, index) => {
              let orientation: Orientation;
              if (img.width < img.height) {
                orientation = Orientation.Portrait;
                return (
                  <ImageCard
                    image={img}
                    orientation={orientation}
                    key={img.id}
                  />
                );
              }
              orientation = Orientation.Landscape;

              return (
                <ImageCard image={img} orientation={orientation} key={img.id} />
              );
            })
          : null}
      </div>
      <div className="flex flex-col gap-4">
        {imageCols.col2
          ? imageCols.col2.map((img: Image, index) => {
              let orientation: Orientation;
              if (img.width < img.height) {
                orientation = Orientation.Portrait;
                return (
                  <ImageCard
                    image={img}
                    orientation={orientation}
                    key={img.id}
                  />
                );
              }
              orientation = Orientation.Landscape;

              return (
                <ImageCard image={img} orientation={orientation} key={img.id} />
              );
            })
          : null}
      </div>
      <div className="flex flex-col gap-4">
        {imageCols.col3
          ? imageCols.col3.map((img) => {
              let orientation: Orientation;
              if (img.width < img.height) {
                orientation = Orientation.Portrait;
                return (
                  <ImageCard
                    image={img}
                    orientation={orientation}
                    key={img.id}
                  />
                );
              }
              orientation = Orientation.Landscape;

              return (
                <ImageCard image={img} orientation={orientation} key={img.id} />
              );
            })
          : null}
      </div>
      {isFetching ? "Loading" : null}
      {/* Infinite Query Div */}
      <div
        ref={containerRef}
        className="absolute bottom-0 left-0 h-1/4 w-full opacity-0"
      ></div>
    </div>
  );
}

enum Orientation {
  Landscape,
  Portrait,
}

const ImageCard = ({
  image,
  orientation,
}: {
  image: Image;
  orientation: Orientation;
}) => {
  // return (
  //   <div
  //     className={`${
  //       orientation === Orientation.Landscape ? "h-72" : "h-[36rem]"
  //     } w-full object-cover rounded-lg overflow-hidden`}
  //   >
  //     <img
  //       key={image.urls?.regular}
  //       src={image.urls?.regular}
  //       alt={image.alt_description}
  //     />
  //   </div>
  // );

  return (
    <ImageDialog>
      <div
        className={`${
          orientation === Orientation.Landscape ? "max-h-96" : "max-h-[36rem]"
        } relative w-full object-cover rounded-lg cursor-pointer  
        border-[1px] border-border group
        overflow-hidden`}
      >
        <div className="hidden transition-all opacity-0 group-hover:opacity-100 group-hover:flex flex-col justify-between  group-hover:absolute left-0 top-0 w-full h-full p-4 text-white bg-gradient-to-b hover:from-black/60 hover:via-transparent hover:to-black/60">
          <div className="flex gap-1 items-center">
            <IconHeart size={20} stroke={3} className="text-white/80" />
            <span className="text-lg text-white font-semibold">
              {image.likes}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-border"
                src={image.user.profile_image.small}
                alt="avatar"
              />
              <span className="text-md font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
                {image.user.name}
              </span>
            </div>
            <Link href={image.links.download} className="">
              <IconDownload
                size={28}
                className="text-white/80 hover:text-white"
              />
            </Link>
          </div>
        </div>
        <img
          key={image.urls?.regular}
          src={image.urls?.regular}
          alt={image.alt_description}
        />
      </div>
    </ImageDialog>
  );
};
