import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessaage] = useState("");
  const [list, setList] = useState([]);

  const tweet = (e) => {
    const newMessage = e.target.value;
    setMessaage(newMessage);
  };

  const post = () => {
    const newList = [message, ...list];
    setList(newList);
    setMessaage("");
    console.log(message);
  };

  const deletePost = () => {
    list.splice(0, 1);
    setList([...list]);
  };

  let [counter, setCounter] = useState(0);
  let [decounter, setdeCounter] = useState(0);

  const increment = () => {
    counter++;
    setCounter(counter);
  };

  const decrement = () => {
    decounter++;
    setdeCounter(decounter);
  };

  return (
    <div>
      <div className="bg-dark text-light p-3 fs-1">My tweet App</div>
      <input
        type="text"
        placeholder="Tweet Here..."
        value={message}
        onChange={tweet}
      />
      <input type="button" className="mx-2" value="Tweet" onClick={post} />
      <input type="button" value="Delete Tweet" onClick={deletePost} />

      {list.map((item) => (
        <div>
          <div className="bg-dark text-light mb-1"> {item} </div>
          <input
            type="button"
            className="mb-1"
            value="Like"
            onClick={increment}
          />
          <span className="mx-2">{counter}</span>
          <input type="button" value="Dislike" onClick={decrement} />
          <span className="mx-2">{decounter}</span>
        </div>
      ))}
    </div>
  );
}
