import React,{useState} from 'react';
import { Link } from 'react-router-dom'

function Users(){
    const [users, setUsers] = useState([{
    Name:"usd",
    Email:"udgs@",
    Age:32,
}])
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
                                        <td>{users.Name}</td>
                                        <td>{users.Email}</td>
                                        <td>{users.Age}</td>
                                        <td>
                                            <td>
                                                <Link to="/update" className="btn btn-success me-2">Update</Link>
                                                <button className="btn btn-outline-dark">Delete</button>
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