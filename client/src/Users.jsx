import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const handleDelete = (id) => {
    axios.delete(`https://silver-broccoli-g4v5r7p94g9jfw9qx-3001.app.github.dev/deleteUser/${id}`)
    .then(result => {
        console.log(result)
        window.location.reload()
    })
    .catch(err => console.log(err))
}

function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://silver-broccoli-g4v5r7p94g9jfw9qx-3001.app.github.dev/Users')
        .then(result=> {
            console.log(result.data)
            setUsers(result.data)})
        .catch(err => console.log(err))
    },[])
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className="btn btn-success mb-3">Add +</Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            users.map((users)=>{
                                return(
                                    <tr>
                                        <td>{users.name}</td>
                                        <td>{users.email}</td>
                                        <td>{users.age}</td>
                                        <td>
                                            <td>
                                                <Link to={`/update/${users._id}`} className="btn btn-success me-2">Update</Link>
                                                <button className="btn btn-danger" onClick={()=>handleDelete(users._id)}>Delete</button>
                                            </td>   
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users;