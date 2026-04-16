import { CodeWalkthroughRoot } from '../components/code-walkthrough-root';
import { narrative } from '../components/walkthrough-narrative';

export default function App() {
  return <CodeWalkthroughRoot steps={narrative} />;
}
