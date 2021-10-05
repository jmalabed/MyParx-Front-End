import { useState, useEffect } from "react";

const ParkAddListItem = (props) => {
  const [form, setForm] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ [e.target.name]: e.target.value });
    console.log(form);
    try {
      await fetch("http://localhost:9000/bucketList", {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      console.log("success");
    }
  };

  return (
    <tr>
      <td>{props.parkprop.name}</td>
      <td>{props.parkprop.states}</td>
      <td>{props.parkprop.description.split(".")[0]}.</td>
      <td>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={props.parkprop.name} name="name" />
          <input type="hidden" value={props.parkprop.states} name="states" />
          <input type="submit" value="Add Favorite" />
        </form>
      </td>
    </tr>
  );
};
export default ParkAddListItem;
