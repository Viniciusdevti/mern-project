import {
  Box,
  Button,
  CardContent,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { listUsers } from "../service/UserService";

export const AppList = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    listUsers("/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch(e => {
        setErr(e.message);
      });
  }, []);

  return (
    <div>
      {err}
      <table>
        <tr>
          <th>
            <h3>Usuarios</h3>
            {users.map(user => (
              <div>{user.username}</div>
            ))}
          </th>

          <th>
            <h3>Email</h3>
            {users.map(user => (
              <div>{user.email}</div>
            ))}
          </th>
        </tr>
      </table>
    </div>
  );
};
