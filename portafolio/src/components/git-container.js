import { useEffect, useState } from "react";
import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: process.env.TOKEN,
});



export default function GitContainer() {
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/BryanBac/repos`
      );
      const data = await response.json();
      setUser(data);
      console.log(user);
      return data;
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div>
      <button onClick={fetchUser}>Buscar</button>
      <div className="TwoGrid"></div>
    </div>
  );
}
