import React from "react";
import AdminProductItem from "../AdminProductItem/AdminProductItem";
import "./Admin.css";



const Admin = () => {
  return (
    <div className="menu">
      <div className="menu-op">
        <h2>Manage Products</h2>
        <hr/>
        <h2>Manage Users</h2>
        <hr/>
        <h2>Register Products</h2>
      </div>
      <div className="menu-details">
        <h1>Manage Users</h1>
        <hr/>
        <table>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Remove</th>
          </tr>
          <AdminProductItem/>
          <AdminProductItem/>
          <AdminProductItem/>

        </table>
      </div>
    </div>
  );
};

export default Admin;