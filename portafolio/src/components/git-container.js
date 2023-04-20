import { useEffect, useState } from "react";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.TOKEN,
});

export default function GitContainer() {
  const [user, setUser] = useState([]);
  const [datosUser, setDatosUser] = useState([]);
  useEffect(() => {
    async function obtener() {
      const response = await fetch(
        `https://api.github.com/users/BryanBac/repos`
      );
      const data = await response.json();
      setUser(data);
    }
    obtener();
  }, []);
  useEffect(()=>{
    var listado = []
    for (var i = 0; i< 30; i++){
      listado.push(<div>{user[i]}</div>)
      console.log(user.at(i))
    }
    setDatosUser(listado)
  },[user])
  return (
    <div>
      <button onClick={()=>console.log(datosUser)}>Buscar</button>
      <div className="aboutContainer">
      </div>
    </div>
  );
}
