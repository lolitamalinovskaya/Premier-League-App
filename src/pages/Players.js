import React, {useState, useEffect} from 'react';
import './Players.scss';
import {Progress} from "../components/Progress";

const Players = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/players')/*api have pagination*/
            .then((res) => res.json())
            .then((res) => {
                setIsLoaded(true);
                setData(res.data);
            })
            .catch((e) => console.log(e))
    }, []);

    return (
        <>
            <h2>Players</h2>
            {isLoaded ?
                    <table className="players">
                        <tbody>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Team</th>
                            <th>Position</th>
                        </tr>
                        {data && data.map((el) => <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.name} {el.surname}</td>
                            <td>{el.team.name}</td>
                            <td>{el.position.name} </td>
                        </tr>)}
                        </tbody>
                    </table> : <Progress />
            }
        </>
    )
}

export default Players;