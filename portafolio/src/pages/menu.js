import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="menuContainer">
      <div className="menu">
        <Link href="/about" className="botones">
          <p>Sobre Mi</p>
        </Link>
        <Link href="/recent-proyects" className="botones">
          <p>Proyectos Recientes</p>
        </Link>
        <Link href="#" className="foto">
        <Image
                src="/yo.jpg"
                alt="Picture of the author"
                width={80}
                height={70}
              />
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
