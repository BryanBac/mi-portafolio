import Proyecto from "./proyecto";
import Tarjeta from "./tarjeta";

export default function BlogContainer({lista}) {
  const elementos = lista.map((item)=>(
    <Tarjeta key={item.id} uid={item.title} url={item.cover}></Tarjeta>
  ))
  return (
    <div className="proyectosRecientes">
      <div className="aboutContainer">
        {elementos}
      </div>
    </div>
  );
}
