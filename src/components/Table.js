import React from 'react'

function Table({ headers, rows, iconSource, elements, category }) {

    return (
        <div>
            <table className='table table-warning table-hover table-sm mx-auto ' style={{ maxWidth: "600px" }}>
                <thead>
                    <tr className='table-dark text-center align-middle '>
                        {headers.map((header, index) => (

                            <th scope="col">{header}</th>

                        ))}

                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {rows.map((row, index) => {

                        return (

                            <tr className='text-center align-middle'>
                                <th scope='row'>
                                    {(() => {
                                        switch (category) {
                                            case "characters":
                                                return (
                                                    <img src={require(`../imgs/characters/icons/${row.name}.png`)} alt={row.name} style={{ width: "50px", height: "50px" }} />
                                                );
                                            //                                     case "otherCategory1":
                                            //                                         return (
                                            //     // 其他类别的渲染方式
                                            //   );
                                            //                                     case "otherCategory2":
                                            //                                         return (
                                            //     // 其他类别的渲染方式
                                            //   );
                                            default:
                                                return (
                                                    null
                                                );
                                        }
                                    })()}

                                </th>
                                {headers.slice(1).map((header, index) => {

                                    switch (row[header]) {
                                        case "Pyro":
                                            return (
                                                <td><img src={require(`../imgs/elements/Pyro.png`)} alt={'Pryo'} style={{ width: "50px", height: "50px", }} /></td>
                                            );
                                        case "Anemo":
                                            return (
                                                <td><img src={require(`../imgs/elements/Anemo.png`)} alt={'Anemo'} style={{ width: "50px", height: "50px", }} /></td>
                                            );
                                        case "Cryo":
                                            return (
                                                <td><img src={require(`../imgs/elements/Cryo.png`)} alt={'Cryo'} style={{ width: "50px", height: "50px", }} /></td>
                                            );
                                        case "Dendro":
                                            return (
                                                <td><img src={require(`../imgs/elements/Dendro.png`)} alt={'Dendro'} style={{ width: "50px", height: "50px", }} /></td>
                                            );
                                        case "Electro":
                                            return (
                                                <td><img src={require(`../imgs/elements/Electro.png`)} alt={'Electro'} style={{ width: "50px", height: "50px", }} /></td>
                                            );
                                        case "Geo":
                                            return (
                                                <td><img src={require(`../imgs/elements/Geo.png`)} alt={'Geo'} style={{ width: "50px", height: "50px", }} /></td>
                                            );
                                        case "Hydro":
                                            return (
                                                <td><img src={require(`../imgs/elements/Hydro.png`)} alt={'Hydro'} style={{ width: "50px", height: "50px", }} /></td>
                                            );
                                        case 5:
                                            return (
                                                <td><img src={require(`../imgs/rarity/rarity_5.png`)} alt={'5'} style={{ width: "100px", height: "20px", }} /></td>
                                            );
                                        case 4:
                                            return (
                                                <td><img src={require(`../imgs/rarity/rarity_4.png`)} alt={'4'} style={{ width: "80px", height: "20px", }} /></td>
                                            );
                                        case 3:
                                            return (
                                                <td><img src={require(`../imgs/rarity/rarity_3.png`)} alt={'3'} style={{ width: "100px", height: "20px", }} /></td>
                                            );
                                        case 2:
                                            return (
                                                <td><img src={require(`../imgs/rarity/rarity_2.png`)} alt={'2'} style={{ width: "100px", height: "20px", }} /></td>
                                            );
                                        case 1:
                                            return (
                                                <td><img src={require(`../imgs/rarity/rarity_1.png`)} alt={'1'} style={{ width: "100px", height: "20px", }} /></td>
                                            );
                                        default:
                                            return (
                                                <td>{row[header]}</td>
                                            )
                                    }

                                    // return (

                                    //     <td>{row[header]}</td>
                                    // )
                                })}

                            </tr>
                        )
                    })}

                </tbody>

            </table>

        </div>
    )
}

export default Table