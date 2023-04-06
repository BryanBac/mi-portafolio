import Link from "next/link";

export default function Tarjeta() {
  return (
    <Link
      href={{
        pathname: "/article",
        query: { name: "test" },
      }}
      className="LinkCard"
    >
      <div className="cardContainer">
        <div className="cardFirst">as</div>
        <div className="cardSecord">cascas</div>
      </div>
    </Link>
  );
}
