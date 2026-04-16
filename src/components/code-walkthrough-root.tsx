import { useState } from 'react';

import { WalkthroughContext } from '../context/walkthrough-context';
import type { WalkthroughStep } from '../types/walkthrough';
import { WalkthroughStepSection } from './walkthrough-step-section';
import { WalkthroughCodePanel } from './walkthrough-code-panel';

type CodeWalkthroughRootProps = {
  steps: WalkthroughStep[];
};

export function CodeWalkthroughRoot({ steps }: CodeWalkthroughRootProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = steps[activeStepIndex] ?? null;
  const activeCode = activeStep?.code ?? '';

  console.log('activeStepIndex', activeStepIndex);

  return (
    <WalkthroughContext.Provider value={{ activeStepIndex, setActiveStepIndex }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          alignItems: 'start',
        }}
      >
        <div>
          {steps.map((step, index) => (
            <WalkthroughStepSection key={step.id} index={index}>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </WalkthroughStepSection>
          ))}
        </div>

        <div
          style={{
            position: 'sticky',
            top: '24px',
          }}
        >
          <WalkthroughCodePanel
            code={activeCode}
            highlightLines={activeStep?.highlightLines ?? []}
          />
        </div>
      </div>
    </WalkthroughContext.Provider>
  );
}
