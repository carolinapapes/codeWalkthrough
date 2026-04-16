import { useState, type ReactNode } from 'react';

import { useStepObserver } from '../hooks/use-step-observer';
import { useActiveStep } from '../hooks/use-active-step';

type WalkthroughStepSectionProps = {
  index: number;
  children: ReactNode;
};

export function WalkthroughStepSection({ index, children }: WalkthroughStepSectionProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const { setActiveStepIndex } = useActiveStep();

  useStepObserver({
    element,
    index,
    onStepEnter: setActiveStepIndex,
  });

  return (
    <section
      ref={setElement}
      style={{
        minHeight: '100vh',
        padding: '48px 0',
      }}
    >
      {children}
    </section>
  );
}
