import React from "react";
import { useState, useEffect } from "react";
import AvatarUser from '../assets/images-Marvel/Avatar-User.png'
import '../styles/LastUserinDB.css'

function LastUserInDb() {
  let [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        setUser(users[users.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container-lastuser">
        <h2>Último usuario registrado</h2>
        <div className="lastuser-card">
          <img src={AvatarUser} alt={user.name} />
          <div className="text-lastuser">
            <p className="lastuser-name">Nombre</p>
            <p className="lastuser-rol">Rol</p>
          </div>
        </div>
      </div>
      {/* </div>
        <div >
          <div >
            <img src="" alt=""/>
          </div>
          <div >
            <p>{user.name}</p>
          </div>
          <div >
            <p>{user.rol}</p>
          </div>
     
      </div> */}
    </>
  );
}

export default LastUserInDb;
