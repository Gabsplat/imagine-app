import { IconArrowsShuffle2 } from "@tabler/icons-react";

export default function RandomCategory() {
  return (
    <section className="mt-14">
      <span className="flex items-center mb-3 gap-2">
        <IconArrowsShuffle2 className="text-imagine-brown" />
        <h2 className="text-imagine-brown font-medium text-lg">
          Give me inspiration
        </h2>
      </span>
      <a
        href="#"
        className={`
            flex rounded-lg items-center justify-center 
            bg-[length:115%] hover:bg-[length:102%]
            transition-all duration-800 ease-in bg-top
            hover:outline outline-2 outline-offset-1 outline-imagine-brown/30
            bg-[url(https://images.unsplash.com/photo-1696550579939-6d5134d4bfc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80)] 
            h-36 text-2xl font-bold text-white w-full
            `}
      >
        Find a random photo
      </a>
    </section>
  );
}
