import { useState } from "react";

const UserDetails = () => {
  const [user, setUser] = useState({
    name: "Siva",
    lastName: "kumar",
    age: 28,
  });

  //   function changeName(e) {
  //     // const newStateObject = { ...user };
  //     // newStateObject.name = e.target.value;
  //     // setUser(newStateObject);
  //     setUser((oldState) => {
  //       return { ...oldState, name: e.target.value };
  //     });
  //   }
  //   function changeAge(e) {
  //     // const newStateObject = { ...user };
  //     // newStateObject.age = e.target.value;
  //     // setUser(newStateObject);
  //     setUser((oldState) => {
  //       return { ...oldState, age: e.target.value };
  //     });
  //   }
  const changeHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter User First Name"
          onChange={changeHandle}
          value={user.name}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter User Last Name"
          onChange={changeHandle}
          value={user.lastName}
          name="lastName"
        />
        <input
          type="number"
          placeholder="Enter User age"
          onChange={changeHandle}
          value={user.age}
          name="age"
        />
        <h2>
          User Name is: {user.name} {user.lastName}
        </h2>
        <h2>User Age is: {user.age}</h2>
        <h2></h2>
      </form>
    </>
  );
};

export default UserDetails;
