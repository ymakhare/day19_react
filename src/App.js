export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let name = "vrushabh";
  let email = "vishv@dip";
  let list = ["pune", "mumbai", "delhi"];
  let obj1 = { id: 1, username: "Vishakha" };

  return (
    <div>
      <h1 className="bg-danger p-2">Learning Interpolation</h1>;
      <h1>
        {name} {email}
      </h1>
      <div> {list} </div>
      <div> {list[1]} </div>
      <div>{`My original ${obj1.id} and user name is ${obj1.username}. `}</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        consequatur, ipsam itaque a facere dicta omnis dolores cupiditate
        ratione voluptatem vitae quisquam iusto mollitia praesentium illo ullam
        ipsa accusamus consequuntur neque? Nulla minima eveniet, quas sequi
        magni, quibusdam ex aspernatur sapiente ut accusamus dolore! Vero rem
        minus dolorum sequi earum.
      </p>
    </div>
  );
}
