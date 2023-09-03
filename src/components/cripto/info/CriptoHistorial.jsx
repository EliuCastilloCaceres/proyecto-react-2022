const CriptoHistorial = ({ history }) => {
    return (
        <>
            <h2>HISTORIAL</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(({ date, priceUsd, time }) => {
                            return (
                                <tr key={time}>
                                    <td>{date}</td>
                                    <td>{priceUsd}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default CriptoHistorial