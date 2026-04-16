import { CodeRenderer } from './code-renderer';

type WalkthroughCodePanelProps = {
  code: string;
  highlightLines?: number[];
};

export function WalkthroughCodePanel({ code, highlightLines = [] }: WalkthroughCodePanelProps) {
  return (
    <div style={{ borderLeft: '1px solid #ccc', paddingLeft: 16 }}>
      <CodeRenderer code={code} highlightLines={highlightLines} />
    </div>
  );
}
