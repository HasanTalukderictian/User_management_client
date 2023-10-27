import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() => fetch('http://localhost:4000/user')
  },
  {
    path:'/addUser',
    element:<AddUser></AddUser>
  },
  {
    path: '/updateUser/:id',
    element:<UpdateUser></UpdateUser>,
    loader:({params}) => fetch(`http://localhost:4000/user/${params.id}`)
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
