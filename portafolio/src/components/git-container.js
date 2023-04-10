import { useEffect, useState } from "react";
import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: process.env.TOKEN,
});



export default function GitContainer() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/BryanBac/repos`
      );
      const data = await response.json();
      setUser(data);
      console.log(user);
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
