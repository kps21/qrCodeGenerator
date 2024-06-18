import { useState } from "react";
import "./regform.css";

const Regform = () => {
  const [user, setUser] = useState({
    name: "Sivakumar",
    age: 28,
    gender: "male",
    isMarried: true,
    country: "India",
    bio: "Write something about yourself",
  });
  const changehandler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>
      <form>
        <input
          type="text"
          placeholder="Full Nama"
          value={user.name}
          onChange={changehandler}
          name="name"
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={changehandler}
          name="age"
        />
        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={user.gender == "male"}
              value="male"
              onChange={changehandler}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              checked={user.gender == "female"}
              value="female"
              onChange={changehandler}
            />
            FeMale
          </label>
        </div>
        <label htmlFor="isMarried">
          <input
            type="checkbox"
            id="isMarried"
            onChange={changehandler}
            checked={user.isMarried}
            name="isMarried"
          />
          Is Married
        </label>
        <div className="select-div">
          <label htmlFor="country">Select Country</label>
          <select
            name="country"
            id="country"
            onChange={changehandler}
            value={user.country}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="5"
          placeholder="Write about you..."
          onChange={changehandler}
        />
      </form>
    </>
  );
};

export default Regform;
