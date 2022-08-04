import React from "react"

function Card({name, team, imageUrl, size, history, linkUrl, match}) {
    return <div style={{border: "1px solid green", borderRadius: "5px"}}>
        <p>{name}</p>
        <p>{team}</p>
    </div>
}

export default Card
