import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddUser = () => {

    

    const [gender, setGender] = useState(""); // Add state for gender
    const [status, setStatus] = useState(""); 
   

    const handleSubmit = event => {
        event.preventDefault();

        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email, gender, status };
        console.log(user);
        fetch('http://localhost:4000/user', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                form.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User has been saved',
                    showConfirmButton: false,
                    timer: 4500
                  })
            }
        })
       
       
    }

    return (
        <div className='max-w-screen-xl  mx-auto'>
            <div className='mx-4 my-6 bg-green-500 '>
                <h2 className='text-3xl font-semibold text-center p-4'>User Management System</h2>
            </div>
            <div className='mx-20 mt-20 mb-6'>
                <Link to='/'><button className="btn btn-success">AllUsers</button></Link>
            </div>
            <div className=' w-4/5  mx-auto mt-30'>
                <div className='my-2 mx-auto'>
                    <h3 className='text-3xl font-semibold text-center mb-3 mt-3'>New User</h3>
                    <p className='my-2 text-center'>Use the below form to create a new account</p>
                </div>

                <form onSubmit={handleSubmit} >
                    <div className='mx-26 my-25'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full " />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="text" name='email' placeholder="Enter Your Name" className="input input-bordered w-full " />

                        </div>
                        <div className="form-control w-1/5 my-4 ">

                            <div className='flex'>
                                <div>
                                <input
                            type='radio'
                            name='gender'
                            value="Male"
                            className="radio radio-primary mr-4"
                            checked={gender === "Male"}
                            onChange={() => setGender("Male")}
                        />
                        Male
                                </div>
                                <div>
                                <input
                            type='radio'
                            name='gender'
                            value="Female"
                            className="radio radio-primary mr-4"
                            checked={gender === "Female"}
                            onChange={() => setGender("Female")}
                        />
                        Female
                                </div>
                            </div>

                        </div>
                        <div className="form-control w-1/5 my-4 ">

                            <div className='flex'>
                                <div>
                                <input
                            type='radio'
                            name='status'
                            value="Active"
                            className="radio radio-primary mr-4"
                            checked={status === "Active"}
                            onChange={() => setStatus("Active")}
                        />
                        Active
                                </div>
                                <div>
                                <input
                            type='radio'
                            name='status'
                            value="InActive"
                            className="radio radio-primary mr-4"
                            checked={status === "InActive"}
                            onChange={() => setStatus("InActive")}
                        />
                        InActive
                                </div>
                            </div>

                        </div>


                        <div className='form-control w-full my-4'>
                            <button className="btn btn-warning text-xl text-white">save</button>
                        </div>
                    </div>
                </form>
               
            </div>
        </div>
    );
};

export default AddUser;