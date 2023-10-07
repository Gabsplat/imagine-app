"use client";

import { IconCategory } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function Categories() {
  return (
    <section className="mt-14">
      <span className="flex items-center mb-3 gap-2">
        <IconCategory className="text-imagine-brown" />
        <h2 className="text-imagine-brown font-medium text-lg">Categories</h2>
      </span>
      <CategoryGrid />
    </section>
  );
}

type Category = {
  title: string;
  bgImage: string;
  href?: string;
};

const categoriesData: Category[] = [
  {
    title: "Nature",
    bgImage:
      "https://images.unsplash.com/photo-1694654760853-ac90921fca6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzYwMzF8MHwxfGFsbHx8fHx8fHx8fDE2OTY1Mjc0MTd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    title: "Animals",
    bgImage:
      "https://images.unsplash.com/photo-1669811247691-f59af80a9974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
  },
  {
    title: "Architecture",
    bgImage:
      "https://images.unsplash.com/photo-1690983741690-087a721f0c15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Travel",
    bgImage:
      "https://images.unsplash.com/photo-1691044852321-f2c95883aea7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
  },
  {
    title: "People",
    bgImage:
      "https://images.unsplash.com/photo-1690875460503-9bdf82e6c203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Sports",
    bgImage:
      "https://images.unsplash.com/photo-1691036768234-cf1f4332a36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "3D Render",
    bgImage:
      "https://images.unsplash.com/photo-1690823874730-f55a1673ece2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Fashion",
    bgImage:
      "https://images.unsplash.com/photo-1691014193202-1d70d7e3d948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Film",
    bgImage:
      "https://images.unsplash.com/photo-1690442604217-aa441f1ac21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
];

const CategoryGrid = () => {
  const [currentHoveredCard, setCurrentHoveredCard] = useState<number | null>(
    null
  );

  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4 h-auto">
      {categoriesData.map(({ title, bgImage }, index) => {
        let isWider = index < 3;
        return (
          <CategoryCard
            key={title + index}
            title={title}
            bgImage={bgImage}
            isWider={isWider}
            id={index}
            setHovered={setCurrentHoveredCard}
            currentHovered={currentHoveredCard}
          />
        );
      })}
    </div>
  );
};

type CategoryCard = Category & {
  isWider?: boolean;
  id: number;
  setHovered: Dispatch<SetStateAction<number | null>>;
  currentHovered: number | null;
};

const CategoryCard = ({
  title,
  href,
  bgImage,
  isWider,
  id,
  setHovered,
  currentHovered,
}: CategoryCard) => {
  return (
    <a
      href={href}
      className={`
      relative p-2 rounded-md h-20 
      transition-[background-size,_opacity] duration-800 ease-in cursor-pointer
      bg-[length:115%] bg-center overflow-hidden
      before:absolute before:content-['_'] before:transition-all before:duration-800
      before:left-0 before:top-0 before:opacity-0 before:w-full before:h-full 
      before:bg-imagine-brown/60 before:z-10
      ${isWider ? "col-span-2" : "col-span-1"}
      ${
        currentHovered === id
          ? "bg-[length:100%] outline outline-2 outline-offset-1 outline-imagine-brown/30"
          : currentHovered !== null && "opacity-30"
      }
      `}
      style={{ backgroundImage: `url(${bgImage})` }}
      onMouseEnter={() => {
        setHovered(id);
      }}
      onMouseLeave={() => {
        setHovered(null);
      }}
    >
      <span
        className={`text-lg absolute right-2 bottom-2 text-white font-bold leading-5 ${
          isWider ? null : "w-[60%] text-right"
        }`}
      >
        {title}
      </span>
    </a>
  );
};
