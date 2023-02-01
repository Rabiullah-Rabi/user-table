import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="p-10 bg-blue-100">
      <div className="container mx-auto">
        <table className="w-full px-5">
          <thead>
            <tr className="p-5">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Table key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
