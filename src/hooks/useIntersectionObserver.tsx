import { MutableRefObject, useEffect, useRef, useState } from "react";

type Props = {
  threshold?: number;
};

export default function useIntersectionObserver({
  threshold = 0.5,
}: Props = {}): {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  isInView: boolean;
} {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callbackFunction, {
      rootMargin: "0px",
      threshold,
    });

    if (containerRef.current) observer.observe(containerRef?.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef?.current);
    };
  }, [containerRef, threshold]);

  return { containerRef, isInView };
}
