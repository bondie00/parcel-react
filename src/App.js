import BarChart from "./components/BarChart";
import Counter from "./components/Counter";

const data = [
  { name: "running", value: 730 },
  { name: "chasing", value: 279 },
  { name: "climbing", value: 658 },
  { name: "eating", value: 760 },
  { name: "foraging", value: 1435 }
]

export function App() {
  return <>
    <h1>Hello world!</h1>
    <Counter
      initialValue={3}
    />
    <BarChart data={data}/>
  </>;
}