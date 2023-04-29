import Tarjeta from "./tarjeta"

export default function Tarjetas({uid, description}){
    return (
        <div className="centrar">
          <Tarjeta uid={uid} description={description}></Tarjeta>
        </div>
    )
}