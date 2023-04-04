import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <div className="menu">
        <Link href="/about" className="botones">
          <p>Sobre Mi</p>
        </Link>
        <Link href="/recent-proyects" className="botones">
          <p>Proyectos Recientes</p>
        </Link>
        <Link href="#" className="foto">
          Holi
        </Link>
        <Link href="/blog" className="botones">
          <p>Blog</p>
        </Link>
        <Link href="/education" className="botones">
          <p>Educación</p>
        </Link>
      </div>
    </div>
  );
}
