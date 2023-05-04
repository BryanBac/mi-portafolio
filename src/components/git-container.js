import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import Proyecto from "./proyecto";

const octokit = new Octokit({
  auth: process.env.TOKEN,
});

export default function GitContainer({lista}) {
  const elementos = lista.map((item)=>(
    <Proyecto key={item.name} name={item.name} description={item.description} link={item.link}></Proyecto>
  ))
  return (
    <div className="proyectosRecientes">
      <div className="aboutContainer">
        {elementos}
      </div>
    </div>
  );
}
