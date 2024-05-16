import React, { useEffect, useState } from "react";
function CryptDisplay(props)
{
    var iter=props.de;
    return(
        <div>
            <h1>{iter.id}</h1>
            <div className='card'>
                        <img src={iter.image} alt={iter.name} className="rounded-circle mr-2" />
                        <p>Name: {iter.name}</p>
                        <p>ID: {iter.id}</p>
                        <p>Symbol: {iter.symbol}</p>
                    </div>
        </div>
    )

}
export default CryptDisplay;