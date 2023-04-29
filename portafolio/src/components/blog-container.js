import Proyecto from "./proyecto";
import Tarjeta from "./tarjeta";

export default function BlogContainer({lista}) {
  const elementos = lista.map((item)=>(
    <Tarjeta uid={item.title}></Tarjeta>
  ))
  return (
    <div className="proyectosRecientes">
      <div className="aboutContainer">
        {elementos}
      </div>
    </div>
  );
}
