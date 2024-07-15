import React, {useEffect, useState}from "react";
import axios from 'axios';


function Show(){
    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get("http://localhost:5000/user");
        setUser(result.data)
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ROLL</th>
                        <th>NAME</th>
                        <th>MARKS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((obj)=>{
                            return (
                                <tr>
                                    <td>{obj.roll}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.marks}</td>
                                    <td>
                                        <button className="btn btn-outline-warning btn-sm me-3">UPDATE</button>
                                        <button className="btn btn-outline-danger btn-sm me-3">DELETE</button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Show;