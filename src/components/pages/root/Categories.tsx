"use client";

import { IconCategory } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function Categories() {
  return (
    <section className="mt-10">
      <span className="flex gap-2">
        <IconCategory />
        <h2>Categories</h2>
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
    bgImage: "",
  },
  {
    title: "Architecture",
    bgImage: "",
  },
  {
    title: "Travel",
    bgImage: "",
  },
  {
    title: "People",
    bgImage: "",
  },
  {
    title: "Sports",
    bgImage: "",
  },
  {
    title: "3D Render",
    bgImage: "",
  },
  {
    title: "Fashion",
    bgImage: "",
  },
  {
    title: "Film",
    bgImage: "",
  },
];

const CategoryGrid = () => {
  const [currentHoveredCard, setCurrentHoveredCard] = useState<number | null>(
    null
  );

  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4 h-auto mt-3">
      {categoriesData.map(({ title, bgImage }, index) => {
        let isWider = index < 3;
        return (
          <CategoryCard
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
      href=""
      className={`
      relative p-2 rounded-md h-20 
      transition-colors duration-300 ease-out
      bg-cover bg-center
      ${isWider ? "col-span-2" : "col-span-1"}
      ${
        currentHovered === id
          ? "bg-blue-500"
          : currentHovered !== null && "bg-gray-600"
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
        className={`absolute right-2 bottom-2 text-white font-bold leading-5 ${
          isWider ? null : "w-[60%] text-right"
        }`}
      >
        {title}
      </span>
    </a>
  );
};
