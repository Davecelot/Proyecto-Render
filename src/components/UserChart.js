import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import '../styles/UserChart.css'
import AvatarUser from '../assets/images-Marvel/Avatar-User.png'

function UserChart() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        // Verificar si data.users es un array, si no, asignar un array vacío
        const usersData = Array.isArray(data.users) ? data.users : [];
        setUsers(usersData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* {users.map((user) => {
        return <UserList key={user.id} {...user} />;
      })} */}

      <div className="user-carousel">
        <div className="user-card">
          <img src={AvatarUser} alt="nombre del usuario" className="user-image"/>
          <div className="text-card">
            <p className="user-name">Nombre dummy</p>
            <p className="user-rol">Rol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserChart;