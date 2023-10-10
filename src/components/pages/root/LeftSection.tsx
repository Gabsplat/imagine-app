import Logo from "@/components/shared/Logo";
import SearchInput from "../../shared/SearchInput";
import Categories from "./Categories";
import RandomCategory from "./RandomCategory";

export default function LeftSection() {
  return (
    <div className="pl-[5%] flex-1 py-12 h-full">
      <Logo />
      <SearchInput className="mt-3" />
      <Categories />
      <RandomCategory />
    </div>
  );
}
