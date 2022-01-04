import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyForm></MyForm>
    </div>
  );
}

function MyForm() {
  const [validationCheck, setValidationCheck] = useState(false);
  const [List, setList] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobno, setMobno] = useState("");
  const [password, setPassword] = useState("");

  const uname = (e) => {
    const newUname = e.target.value;
    setUsername(newUname);
  };

  const uemail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const umobno = (e) => {
    const newMob = e.target.value;
    setMobno(newMob);
  };

  const upassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const register = () => {
    //alert(`${username} ${email} ${mobno} ${password}`); //working fine
    if (username == "" || email == "" || mobno == "" || password == "") {
      setValidationCheck(true);
      return;
    }

    const object = {
      Name: username,
      Email: email,
      Mob_no: mobno,
      Password: password,
    };

    const newList = [object, ...List];
    setList(newList);
    setUsername("");
    setEmail("");
    setMobno("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-2">Registration Form</h1>
      <div>
        <input
          type="text"
          className="form form-control w-50 my-2"
          placeholder="Enter your Name"
          value={username}
          onChange={uname}
          className={
            username == "" && validationCheck ? "border boder-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          className="form form-control w-50 my-2"
          placeholder="Enter your email id"
          value={email}
          onChange={uemail}
          className={
            email == "" && validationCheck ? "border boder-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          className="form form-control w-50 my-2"
          placeholder="Enter your Mob No."
          value={mobno}
          onChange={umobno}
          className={
            mobno == "" && validationCheck ? "border boder-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="text"
          className="form form-control w-50 my-1"
          placeholder="Enter your password"
          value={password}
          onChange={upassword}
          className={
            password == "" && validationCheck ? "border boder-danger" : ""
          }
        />
      </div>
      <div>
        <input
          type="button"
          className="btn btn-outline-danger my-2 w-25"
          value="Register"
          onClick={register}
        />
      </div>
      <div>
        {List.map((item) => (
          <div>
            <div>Name : {item.Name}</div>
            <div>Email Id : {item.Email}</div>
            <div>Mobile No. : {item.Mob_no}</div>
            <div>Password : {item.Password}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
