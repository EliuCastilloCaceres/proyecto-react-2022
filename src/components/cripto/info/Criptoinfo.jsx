const Criptoinfo = ({cripto}) => {

    return (
        <>
            <div className="info">
                <ul>
                    <li><span className="label">Nombre: </span>{cripto.name}</li>
                    <li><span className="label">Símbolo: </span>{cripto.symbol}</li>
                </ul>
            </div>
        </>
    )
}

export default Criptoinfo