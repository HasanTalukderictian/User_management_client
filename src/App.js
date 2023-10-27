import { Link, useLoaderData } from "react-router-dom";
import CartUser from "./components/CartUser/CartUser";


function App() {
  const loadedUser = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto">
         <div className='mx-4 my-6 bg-green-500 '>
                <h2 className='text-3xl font-semibold text-center p-4'>User Management System</h2>
            </div>
            <div className='mx-20 mt-20 mb-6'>
                <Link to='/addUser'><button className="btn btn-success">Add New user</button></Link>
            </div>

             <div>
                 {
                   loadedUser.map(user => <CartUser key={user._id}
                   user ={user}></CartUser>)
                 }
             </div>
    </div>
  );
}

export default App;
