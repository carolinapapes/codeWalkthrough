import { WalkthroughNarrative } from '../types/walkthrough';

export const narrative: WalkthroughNarrative = [
  {
    id: 'step-1',
    title: 'Initial state',
    description: 'Simple component with no state',
    code: `function App() { return <div>Hello</div>; }`,
  },
  {
    id: 'step-2',
    title: 'Add state',
    description: 'Introduce a state variable to hold the count',
    code: `function App() { const [count, setCount] = useState(0); return <div>{count}</div>; }`,
  },
];
