import { createContext, type Dispatch, type SetStateAction } from 'react';

export type WalkthroughContextValue = {
  activeStepIndex: number;
  setActiveStepIndex: Dispatch<SetStateAction<number>>;
};

export const WalkthroughContext = createContext<WalkthroughContextValue | null>(null);
