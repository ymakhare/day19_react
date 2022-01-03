/**
 * style = ""
 * style="background-color:red"
 *
 * RULE
 * style = {{}}
 * style = {{backgroundColor: "red"}}
 *
 * 1. First Two Letter Css Property are now Converted into camelCase proprty.
 * 2. The value of the property must be in "DOUBLE QOUTE"
 */
export default function App() {
  return (
    <div>
      <div>
        <h1
          style={{
            height: "50px",
            backgroundColor: "Green",
            fontSize: "30px",
            padding: "8px",
            textAlign: "center",
            color: "white"
          }}
        >
          Hello Vrushabh and Vishvadip
        </h1>
      </div>
    </div>
  );
}
