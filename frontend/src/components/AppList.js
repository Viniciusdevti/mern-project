
import React, { useEffect, useState } from "react";

import api from  "../service/api";

export const AppList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("usuarios").then(response => {
      setUsers(response.user);
      
    });
  }, );


  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Caso:</strong>
            <p>{user.email}</p>

         
        </li>
      ))}
    </ul>

    </div>
  );
};
