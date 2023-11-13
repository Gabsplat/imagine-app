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
            border-[1px] border-border 
            shadow-sm hover:shadow-lg
            bg-[url(https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center
            h-36 text-3xl font-bold text-black w-full
            `}
      >
        Find a random photo
      </a>
    </section>
  );
}
