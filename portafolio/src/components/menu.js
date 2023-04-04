import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <div className="root">
        <Link href="#" replace className="botones">
          <p>Sobre Mi</p>
        </Link>
        <Link href="#" replace className="botones">
          <p>Proyectos Recientes</p>
        </Link>
        <Link href="#" replace className="foto">
          Holi
        </Link>
        <Link href="#" replace className="botones">
          <p>Blog</p>
        </Link>
        <Link href="#" replace className="botones">
          <p>Educación</p>
        </Link>
      </div>
    </div>
  );
}
