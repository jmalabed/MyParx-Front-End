import { Stack } from "react-bootstrap";


const ParkHome = (props) => {
  return (
    <Stack gap={4} >
      <div className="bg-light border">
        Meet The DeplAyerz
        <br />
        <img src="https://images.unsplash.com/photo-1592610687683-41d676fcda72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=200&q=100" />
      </div>
      <div className="bg-light border">
        <p>Parks List</p>
        <p>Notable Park List Here</p>
      </div>
      <div className="bg-light border">
        <p>Packing List</p>
      </div>
      <div className="bg-light border">
        <p>This is What the page is all about goes here</p>
      </div>
    </Stack>
  );
};
export default ParkHome;
