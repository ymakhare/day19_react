export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const id1 = 100;
  let obj1 = { id: 1, username: "Vishakha" };
  const background = "bg-danger";
  return(
    <div>
      <h1>Interpolation {obj1.id + 100} </h1>
      <h1 id={id1} className={background}>Interpolation {id1}</h1>
    </div>
  )

}
