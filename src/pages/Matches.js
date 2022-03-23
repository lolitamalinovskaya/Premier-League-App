import React, {useEffect, useState} from 'react';
import logIn from "./LogIn";

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    fetch('https://polar-shelf-59117.herokuapp.com')
        .then((res) => res.json)
        .then((res) => {
            setIsLoaded(true);
            setMatches(res.data);
        })
        .catch((e) => console.log(e))
    },[])

    return (
        <h2>Matches</h2>
    )
}

export default Matches;