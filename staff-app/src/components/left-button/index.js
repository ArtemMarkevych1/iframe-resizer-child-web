import React from "react"
import {useLocation} from "react-router-dom";

export default function SharedButton() {
    let label;
    let {pathname} = useLocation();

    pathname = Number(pathname.split("/").filter(String)[0])

    return (
        <>
            <button onClick={()=>console.log("---pathname", pathname)}>Click</button>
        </>
    )
}
