import Link from "next/link";

export default function Tarjeta({ uid, description }) {
  return (
    <div className="centrar">

      <div className="cardContainer">
        <div className="cardFirst">{uid}</div>
      </div>
    </div>
  );
}
