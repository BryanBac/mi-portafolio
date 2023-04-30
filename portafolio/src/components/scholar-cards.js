import ScholarCard from "./scholar-card"

export default function Scholars() {
  return (
    <div className="centrarScholar">
      <ScholarCard name="2023 - Universidad Rafael Landivar" escolaridad="Estudiante actual de 5to año de Ingeniería en Informatica y Sistemas" link="/landivar.png"></ScholarCard>
      <ScholarCard name="2018 - Colegio Costa Sur" escolaridad="Bachillerato en Ciencias y Letras" link="/costaSur.png"></ScholarCard>
      <ScholarCard name="2014 - Universidad del Valle de Guatemala." escolaridad="Cursos de Inglés recibidos y aprobación de ELASH " link="/pexels-vectors-icon-968299.jpg"></ScholarCard>
    </div>
  )
}