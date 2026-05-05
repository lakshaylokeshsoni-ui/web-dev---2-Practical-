// src/Home.js
import React, { useContext } from "react";
import UserContext from "./context/UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={() => setUser("New User")}>
        Change User
      </button>
    </div>
  );
};

export default Home;