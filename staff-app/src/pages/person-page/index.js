// import React from "react"
// import {users} from "../../json";
// import {useParams} from "react-router-dom";
//
// function StaffPage() {
//
//     let {id} = useParams();
//
//     return <div>
//         ID --- {id}
//     </div>
// }
//
// export default StaffPage

import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import {useParams} from "react-router-dom";

export default function StaffPage (){
    let params = useParams();
    // const {params: { personId }} = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        console.log("--params", params)
            //     fetch(`https://swapi.dev/api/people/${personId}`, {})
            //         .then((res) => res.json())
            //         .then((response) => {
            //             setData(response);
            //             setIsLoading(false);
            //             console.log(`https://swapi.dev/api/people/${personId}`);
            //         })
            //         .catch((error) => console.log(error));
            // }, [personId]
        }, []
    );

    return (
        ''
        // <>
        //     {!isLoading && (
        //         <>
        //             <h1>Name: {data.name}</h1>
        //             <h2>Height: {data.height}</h2>
        //             <h2>Mass: {data.mass}</h2>
        //             <h2>Hair Color: {data.hair_color}</h2>
        //             <h2>Skin Color: {data.skin_color}</h2>
        //             <h2>Eye Color: {data.eye_color}</h2>
        //             <h2>Birth Year: {data.birth_year}</h2>
        //             <h2>Gender: {data.gender}</h2>
        //             <Link to="/">Back to homepage</Link>
        //         </>
        //     )}
        // </>
    );
};
