import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="menuContainer">
      <div className="menu">
        <Link href="/about" className="botones">
          <p className="texto">Sobre Mi</p>
        </Link>
        <Link href="/recent-proyects" className="botones">
          <p className="texto">Proyectos Recientes</p>
        </Link>
        <Link href="https://www.youtube.com/@bryanbac6322/featured" className="foto">
        <Image
                src="/yo.jpg"
                alt="Picture of the author"
                width={80}
                height={70}
              />
        </Link>
        <Link href="/blog" className="botones">
          <p className="texto">Blog</p>
        </Link>
        <Link href="/education" className="botones">
          <p className="texto">Educación</p>
        </Link>
      </div>
    </div>
  );
}
