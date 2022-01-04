import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let [counter, setCounter] = useState(0);
  // function increment() {
  //   setCounter(counter++);
  // }
  return (
    <div>
      <input
        type="button"
        value="Like me.."
        onClick={() => setCounter(counter++)}
      />
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
    </div>
  );
}
