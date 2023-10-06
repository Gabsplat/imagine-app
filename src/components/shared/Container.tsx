export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-[90%] 2xl:w-[85%] m-auto">{children}</div>;
}
