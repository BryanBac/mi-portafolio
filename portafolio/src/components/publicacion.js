export default function Publicacion({ lista, publi }) {
    const elementos = lista.map((item) => {
        if (item.title === publi) {
            return (
                <div>
                    <h1 key={item.id}>{item.title}</h1>
                    <h1 key={item.id}>{item.description[0].text}</h1>
                    <div>
                        <img src={item.cover} alt="no se pudo mostrar" className="imgTarjeta" width="100%"
                            height="50%" />
                    </div>
                </div>
            )
        }
    })
    return (
        <div className="proyectosRecientes">
            <div className="aboutContainer">
                {elementos}
            </div>
        </div>
    );
}
