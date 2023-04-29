import Link from "next/link";
import Image from "next/image";
import Post from "@/pages/post/[id]";

export default function Tarjeta({ uid, url }) {
  const ref = `/post/${uid}`
  return (
    <Link href={ref}>
    <div className="centrar">
      <div className="cardContainer">
        <div className="cardFirst">{uid}</div>
        <div className="cardSecond">
        <img src={url} alt="no se pudo mostrar" className="imgTarjeta" width="100%" 
     height="50%"/>
        </div>
      </div>
    </div>
    </Link>
  );
}
