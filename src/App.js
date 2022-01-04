import { useState } from "react";
export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const id1 = 100;
  const list = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [defaultcss, setdefault] = useState("bg-info my-2 p-0 text-light");

  const setRed = () => setdefault("bg-danger my-2 p-0 text-light");
  const setGreen = () => setdefault("bg-success my-2 p-0 text-light");
  const setDark = () => setdefault("bg-dark my-2 p-0 text-light");

  return (
    <div>
      <input type="button" value="Red" onClick={setRed} />
      <input type="button" value="Green" onClick={setGreen} />
      <input type="button" value="Dark" onClick={setDark} />
      {list.map(() => (
        <div className={defaultcss}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          necessitatibus est libero corrupti quidem! Ut libero perspiciatis
          dignissimos aut, alias, ipsam nesciunt unde, iure eaque numquam
          laborum optio qui eius veritatis quibusdam illo dolorum tempore itaque
          ullam at velit? Tempore ad eligendi voluptates perferendis, deserunt
          ea natus possimus doloribus soluta.
        </div>
      ))}
    </div>
  );
}
