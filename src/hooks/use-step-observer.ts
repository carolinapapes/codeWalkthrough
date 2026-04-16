import { useEffect } from 'react';

type UseStepObserverParams = {
  element: HTMLElement | null;
  index: number;
  onStepEnter: (index: number) => void;
};

export function useStepObserver({ element, index, onStepEnter }: UseStepObserverParams) {
  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onStepEnter(index);
        }
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, index, onStepEnter]);
}
