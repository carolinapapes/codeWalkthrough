import { useContext } from 'react';
import { WalkthroughContext } from '../context/walkthrough-context';

export function useActiveStep() {
  const context = useContext(WalkthroughContext);

  if (!context) {
    throw new Error('useActiveStep must be used within CodeWalkthrough');
  }

  return context;
}
