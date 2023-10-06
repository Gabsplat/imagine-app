"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function TestCall() {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      return axios
        .get("https://api.unsplash.com/photos?page=1", {
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
          },
        })
        .then((res) => res.data);
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data, isError, isLoading]);

  return (
    <div className="mt-20 flex flex-row">
      {isLoading && "loading..."}
      {isError && "error..."}

      {!isLoading && !isError
        ? data.map((item: any) => {
            return (
              <img
                className="w-20 h-20 hover:scale-150 transition-all duration-100"
                src={item.urls.regular}
              />
            );
          })
        : ""}
    </div>
  );
}
