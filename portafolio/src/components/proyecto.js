export default function Proyecto({name, description, link}){
    return(
        <div className="cardContainer">
            <div className="cardFirst">
                <a href={link}>{name}</a>
            </div>
            <div className="cardSecord">
                {description}
            </div>
        </div>
    )
}