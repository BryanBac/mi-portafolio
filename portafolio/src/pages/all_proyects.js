import Head from "next/head";
import LoginBar from "@/pages/login_bar";
import Menu from "@/pages/menu";
import GitContainer from "@/components/git-container";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AllProyects() {
  const [user, setUser] = useState([]);
  const [datosUser, setDatosUser] = useState([]);
  useEffect(() => {
    async function obtener() {
      const response = await fetch(
        `https://api.github.com/users/BryanBac/repos`
      );
      const data = await response.json();
      setUser(data);
      var listado = [];
      for (var i = 0; i < 30; i++) {
        listado.push({
          name: data[i].name,
          link: data[i].html_url,
          description: data[i].description,
        });
      }
      setDatosUser(listado);
    }
    obtener();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LoginBar></LoginBar>
        <Menu></Menu>
        <div className="centrar">
          <Link href="/recent-proyects" className="botones">
            <p>Ir a Proyectos Estrella</p>
          </Link>
        </div>
        <div className="centrar m5">
          <GitContainer lista={datosUser}></GitContainer>
        </div>
      </div>
    </>
  );
}
