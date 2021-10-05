const ParkAddListItem = (props) => {
  const handleSubmit = async (e) => {
    await fetch("http://localhost:9000/bucketList", {
      body: JSON.stringify(),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <tr>
      <td>{props.parkprop.name}</td>
      <td>{props.parkprop.states}</td>
      <td>{props.parkprop.description.split(".")[0]}.</td>
      <td>Add Favorite</td>
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={parks.parkprop.name} name="name" />
        <input type="hidden" value={parks.parkprop.states} name="states" />
      </form>
    </tr>
  );
};
export default ParkAddListItem;
