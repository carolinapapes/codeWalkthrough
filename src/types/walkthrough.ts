export type WalkthroughStep = {
  id: string;
  code: string;
  title?: string;
  description?: string;
  highlightLines?: number[];
};

export type WalkthroughNarrative = WalkthroughStep[];
