import Head from "next/head";
import LoginBar from "@/pages/login_bar";
import Menu from "@/pages/menu";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LoginBar></LoginBar>
        <Menu></Menu>
        <div className="about2">
          <div className="aboutLeft">
            <div className="blockAbout">
              <div>
                <div className="centrar">
                  <h3>¿Quien Soy?</h3>
                </div>
                <div className="inputAbout">
                  <div className="ocuparTodoDiv input proyectosRecientes">
                    Soy alguien bastante sociable, me encanta relacionarme con las
                    personas y trabajo muy bien con ellas, siempre he sido alguien
                    muy trabajador, y cuando suelo encontrarme con una dificultad
                    no descanso hasta superarla.
                  </div>
                </div>
              </div>
              <div>
                <div className="centrar">
                  <h3>Mi experencia</h3>
                </div>
                <div className="inputAbout">
                  <div className="ocuparTodoDiv input proyectosRecientes">
                    Trabajo como Freelance (2023)
                    <br></br>Miembro de equipo de desarrollo en CRSAPP trabajando
                    en conjunto con Villanova University (2021-2022) <br></br>
                    Miembro del equipo de desarrollo en Vedilabs, Ventana a la
                    Diversidad (VEDI) Sonora Resiliente. (2021) <br></br>Tutor de
                    programación avanzada en Universidad Rafael Landívar (2020){" "}
                    <br></br>Tutor de Matemática 2 Universidad Rafael Landívar
                    (2021)
                  </div>
                </div>
              </div>
              <div>
                <div className="centrar">
                  <h3>Informaión de Contacto</h3>
                </div>
                <div className="inputAbout">
                  <div className="ocuparTodoDiv input proyectosRecientes">
                    Email: bryanbacparedes@gmail.com<br></br>
                    Facebook: <a href="https://www.facebook.com/bryan.bac.79">Bryan Bac</a><br></br>
                    Linkedin: <a href="https://www.linkedin.com/in/bryan-paredes-8024b51b9/">Bryan Paredes</a><br></br>
                    Canal de Youtube: <a href="https://www.youtube.com/@bryanbac6322">ᛒᚱᛃᚨᚾ ᛒᚨᚲ [Bryan Bac]</a><br></br>
                    Instagram: <a href="https://www.instagram.com/bryan_bac/">Bryan Bac</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutRight">
            <Image
              src="/saco.jpg"
              alt="Picture of the author"
              className="styledImage"
              height={150}
              width={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
