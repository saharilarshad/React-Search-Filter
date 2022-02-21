import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
// import {Users} from "../../api/users";

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([])

  // console.log(Users.filter(user => user.first_name.toLowerCase().includes('fe')));

  useEffect(() => {
    const fetchUsers = async() => {
      const res = await axios(`http://localhost:5000?q=${query}`)
      // console.log(res.data);
      setData(res.data);
    }
    fetchUsers();
  }, [query])
  

  return (
    <div className="App">
      <input type="text" className="search" placeholder="Search..."
      onChange={e => setQuery(e.target.value)} />

      <Table data={data} />
      
    </div>
  );
}

export default App;
