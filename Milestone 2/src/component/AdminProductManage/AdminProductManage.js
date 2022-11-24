import React from "react";
import AdminProductItem from "../AdminProductItem/AdminProductItem";
import "./AdminProductManage.css";



const AdminProductManage = () => {
  return (
    <table>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Remove</th>
          </tr>
          <AdminProductItem/>
        </table>
  );
};

export default AdminProductManage;
