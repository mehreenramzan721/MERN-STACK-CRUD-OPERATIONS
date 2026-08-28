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
                                            <button><Link to="/update" className="btn btn-succcess">Update</Link></button>
                                            {/* <button>Edit</button> */}
                                            <button>Delete</button>
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