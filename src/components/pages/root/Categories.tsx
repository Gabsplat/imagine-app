"use client";

import { IconCategory } from "@tabler/icons-react";
import Link from "next/link";
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
    href: "/cat/nature",
    bgImage: "/assets/home/categories/nature.jpg",
  },
  {
    title: "Animals",
    href: "/cat/animals",
    bgImage: "/assets/home/categories/animals.jpg",
  },
  {
    title: "Architecture",
    href: "/cat/architecture",
    bgImage: "/assets/home/categories/architecture.jpg",
  },
  {
    title: "Travel",
    href: "/cat/travel",
    bgImage: "/assets/home/categories/travel.jpg",
  },
  {
    title: "People",
    href: "/cat/people",
    bgImage: "/assets/home/categories/people.jpg",
  },
  {
    title: "Sports",
    href: "/cat/sports",
    bgImage: "/assets/home/categories/sports.jpg",
  },
  {
    title: "3D Render",
    href: "/cat/3drender",
    bgImage: "/assets/home/categories/3drenders.jpg",
  },
  {
    title: "Fashion",
    href: "/cat/fashion",
    bgImage: "/assets/home/categories/fashion.jpg",
  },
  {
    title: "Film",
    href: "/cat/film",
    bgImage: "/assets/home/categories/film.jpg",
  },
];

const CategoryGrid = () => {
  const [currentHoveredCard, setCurrentHoveredCard] = useState<number | null>(
    null
  );

  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4 h-auto">
      {categoriesData.map(({ title, href, bgImage }, index) => {
        let isWider = index < 3;
        return (
          <CategoryCard
            key={title + index}
            title={title}
            bgImage={bgImage}
            href={href}
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

const CategoryCard = ({ title, href, bgImage, isWider, id }: CategoryCard) => {
  return (
    <Link
      href={href || "/"}
      className={`
        relative rounded-md overflow-hidden 
        transition-shadow ease-out cursor-pointer
        border-[1px] border-border
        shadow-sm hover:shadow-lg
        ${isWider ? "col-span-2" : "col-span-1"}
      `}
    >
      <img
        src={bgImage}
        alt=""
        className="h-16 w-full object-cover object-center"
      />
      <div className="px-3 py-2 rounded-bl-md rounded-br-md">
        <span
          className={`
          text-md
          text-primary leading-5 
          ${isWider ? null : "w-[60%] text-right"}
        `}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};
