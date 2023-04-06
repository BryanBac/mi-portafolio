import ScholarCard from "./scholar-card"

export default function Scholars(){
    return (
        <div className="centrarScholar">
          <ScholarCard name="Landivar" escolaridad="5to año" link="/alt"></ScholarCard>
          <ScholarCard name="Colegio Costa Sur" escolaridad="Bachillerato" link="/alt"></ScholarCard>
        </div>
    )
}