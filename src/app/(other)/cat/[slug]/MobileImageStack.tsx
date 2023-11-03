import { ImageDataProps } from "./DesktopImageGrid";

export default function MobileImageStack({
  data,
  isFetching,
  error,
  fetchNextPage,
}: ImageDataProps) {
  const sortedImages = data?.pages
    .flat()
    .map(({ images }) => {
      return images;
    })
    .flat();

  return (
    <div className="flex flex-col gap-8">
      {data && sortedImages && !isFetching && !error
        ? sortedImages.map((img, index) => {
            if (img.width < img.height) {
              return (
                <img
                  key={img.urls?.regular + "@index" + index}
                  src={img.urls?.regular}
                  className="w-full object-cover rounded-lg"
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
  );
}
