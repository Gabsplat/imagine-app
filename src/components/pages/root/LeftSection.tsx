import Categories from "./Categories";
import RandomCategory from "./RandomCategory";
import SearchInput from "./SearchInput";

export default function LeftSection() {
  return (
    <div className="pl-[5%] flex-1 py-12 h-full">
      <h1 className="text-4xl text-imagine-brown font-bold">Imagine</h1>
      <SearchInput />
      <Categories />
      <RandomCategory />
    </div>
  );
}
