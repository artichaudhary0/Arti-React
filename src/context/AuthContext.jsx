import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null); // create context for Auth

export const AuthProvider = ({ childern }) => {
  // get the user from LS and pass it to useState
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user"); // get the user from local storage

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const register = async (email, password) => {
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      // true
      throw new Error("User Already exist");
    }

    // new user details
    const newUser = {
      id: Date.now(),
      email,
      password,
    };

    const updateUsers = [...users, newUser];

    setUsers(updateUsers);

    localStorage.setItem("users", JSON.stringify(updateUsers));

    // set the user directly instead of call login

    const userWithoutPassword = { id: newUser.id, email: newUser.email };
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
  };
};
