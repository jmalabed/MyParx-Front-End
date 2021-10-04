import { Table } from "react-bootstrap";

const ParkList = (props) => {
  return (
    <div>
      <a href="/parklist/add">Add</a>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default ParkList;
