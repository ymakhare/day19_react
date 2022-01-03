export default function App() {
  let username = "Yogesh";
  let email = "xyz@html.com";
  let list = [2,2,2,2]

  return (
    <div>

      <h1 className="alert-success p-2   "> Helllo worldd</h1>
      {list.map((item) => (<div className="bg-secondary mb-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        atque laboriosam harum labore et, similique rem voluptatibus magni,
        sapiente aspernatur praesentium fugit rerum enim reprehenderit nam iste
        dignissimos aliquam, eveniet obcaecati quos necessitatibus fuga.
        Pariatur cum eos nemo quaerat beatae. Voluptates, perspiciatis harum
        deleniti explicabo vitae non ipsa consectetur voluptate!
      </div>))}
      
    </div>
  );
}
