import { useState } from "react";

const ParkAddListItem = (props) => {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    console.log({ name: props.parkprop.name });
    setForm({ name: props.parkprop.name });

    e.preventDefault();
    try {
      console.log(form);
      const config = {
        body: JSON.stringify(form),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const createdPark = await fetch(
        "https://project-two-backend.herokuapp.com/bucketList",
        config
      );
      const parsedPark = await createdPark.json();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(form, setForm);
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
