import { splitCodeLines } from '../utils';

type CodeRendererProps = {
  code: string;
  highlightLines?: number[];
};

export function CodeRenderer({ code, highlightLines = [] }: CodeRendererProps) {
  const lines = splitCodeLines(code);

  return (
    <pre className="p-4 rounded-md bg-bg-secondary overflow-auto">
      <code>
        {lines.map((line, index) => {
          const lineNumber = index + 1;
          const isHighlighted = highlightLines.includes(lineNumber);

          return (
            <div key={lineNumber} className={isHighlighted ? 'bg-yellow-200/20' : undefined}>
              <span className="inline-block w-8 opacity-50 select-none">{lineNumber}</span>
              <span>{line || ' '}</span>
            </div>
          );
        })}
      </code>
    </pre>
  );
}
