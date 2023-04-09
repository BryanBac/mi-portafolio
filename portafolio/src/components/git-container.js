import { useEffect, useState } from "react";

export default function GitContainer() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${search}/repos`
      );
      const data = await response.json();
      setUser(data);
      console.log(user[0]);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for User"
        onChange={(e)=>setSearch(e.target.value)}
        className="input_search"
      />
      <button onClick={fetchUser}>Buscar</button>
      <div className="TwoGrid"></div>
    </div>
  );
}
