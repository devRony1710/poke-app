import { useEffect, useRef } from 'react';

interface UseIntersectionProps {
  onIntersect: () => void;
  enabled?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const useIntersection = ({
  onIntersect,
  enabled = true,
  threshold = 1,
  rootMargin = '0px',
}: UseIntersectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold, rootMargin },
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [onIntersect, enabled, threshold, rootMargin]);

  return { ref };
};
