import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function UpdateUser() {
    const { id } = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://crud-2be.onrender.com/getUser/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)


            })
            .catch(err => console.log(err))


    }, [id])

    const Update = (e) => {
        e.preventDefault();
        axios.put("https://crud-2be.onrender.com/updateUser/" + id, { name, email, age })
            .then(result => {
                navigate('/')


                console.log(result)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">

                    <form onSubmit={Update}>
                        <h2>Update User</h2>
                        <div className="mb-2 text-start">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-control" placeholder="Enter name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-2 text-start">
                            <label htmlFor="" >Email</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-2 text-start">
                            <label htmlFor="" >Age</label>
                            <input type="text" className="form-control" placeholder="Enter age"
                                value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <button className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser;