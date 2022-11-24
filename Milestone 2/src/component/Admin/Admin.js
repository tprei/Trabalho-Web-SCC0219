import React from "react";
import "./Admin.css";



const Admin = () => {
  return (
    <div class="menu">
      <div class="menu-op">
        <h2>Manage Products</h2>
        <hr/>
        <h2>Manage Users</h2>
        <hr/>
        <h2>Register Products</h2>
      </div>
      <div class="menu-details">
        <h1>Manage Users</h1>
        <hr/>
        <table>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Remove</th>
          </tr>
          <tr>
            <td>AAAAAA</td>
            <td>Pamonha@gmail.com</td>
            <td>X</td>
          </tr>
          <tr>
            <td>AAAAAA</td>
            <td>Pamonha@gmail.com</td>
            <td>X</td>
          </tr>
          <tr>
            <td>AAAAAA</td>
            <td>Pamonha@gmail.com</td>
            <td>X</td>
          </tr>
          <tr>
            <td>AAAAAA</td>
            <td>Pamonha@gmail.com</td>
            <td>X</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Admin;