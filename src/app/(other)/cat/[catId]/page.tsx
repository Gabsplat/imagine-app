export default async function Page({ params }: { params: { catId: string } }) {
  const imgRequest = await fetch("https://api.unsplash.com/photos?page=1", {
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
    },
  });
  const images = await imgRequest.json();

  console.log(images);

  return (
    <div className="grid grid-cols-3 gap-4 h-[200vh] bg-yellow-200">
      <div className="flex flex-col gap-2">
        {images.slice(0, 3).map((img: any) => {
          if (img.width > img.height) {
            return (
              <img
                src={img.urls.regular}
                className="w-full h-48 object-cover"
                alt=""
              />
            );
          }
          return (
            <img
              src={img.urls.regular}
              className="w-full h-96 object-cover"
              alt=""
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        {images.slice(3, 6).map((img: any) => {
          if (img.width > img.height) {
            return (
              <img
                src={img.urls.regular}
                className="w-full h-48 object-cover"
                alt=""
              />
            );
          }
          return (
            <img
              src={img.urls.regular}
              className="w-full h-96 object-cover"
              alt=""
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        {images.slice(7, 10).map((img: any) => {
          if (img.width > img.height) {
            return (
              <img
                src={img.urls.regular}
                className="w-full h-48 object-cover"
                alt=""
              />
            );
          }
          return (
            <img
              src={img.urls.regular}
              className="w-full h-96 object-cover"
              alt=""
            />
          );
        })}
      </div>

      {/* <div className="bg-black/20 h-80">test1</div>
      <div className="bg-black/30 h-80">test2</div>
      <div className="bg-black/10 h-80">test3</div> */}
    </div>
  );
}
