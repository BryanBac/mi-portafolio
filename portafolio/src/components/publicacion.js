export default function Publicacion({ lista, publi }) {
    const elementos = lista.map((item) => {
        if (item.title === publi) {
            return (
                <div key={item.id + "Publi"} className="PubliNow">
                    <div className="centrar all_width">
                        <h1 key={item.id}>{item.title}</h1>
                    </div>
                    <div className="centrar">
                        <h3 key={item.id + "text"}>{item.description[0].text}</h3>
                    </div>
                    <div className="centrar">
                        <img src={item.cover} alt="no se pudo mostrar" className="imgTarjeta" width="40%"
                            height="20%" />
                    </div>
                </div>
            )
        }
    })
    return (
        <div className="proyectosRecientes">
            {elementos}
        </div>
    );
}
