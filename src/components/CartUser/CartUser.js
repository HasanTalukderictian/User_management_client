import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartUser = ({ user }) => {

    const { _id,name, email, gender, status } = user;
    const handleDelete =(_id) => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/user/${_id}`, {
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                   
                })
            }
          })

        console.log(_id);
        
    }

    return (
        <div>
            <div className='my-4 mx-4 py-4'>
                <div className='flex card w-full bg-base-100'>
                    <div className='flex space-x-4'>
                        <p className='text-xl'>{name}</p>
                        <p>{email}</p>
                        <p>{gender}</p>
                        <p>{status}</p>
                        <Link to={`/updateUser/${_id}`}> <button className="btn btn-success">Update</button></Link>
                       <button onClick={()=> handleDelete(_id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartUser;