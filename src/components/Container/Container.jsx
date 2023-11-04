import React, { useState, useEffect } from "react";
import { useFetching } from "../../useFetching";
import Service from "../../Servise";
import Main from "./Main/Main";
import "./Container.css";
import Sidebar from "./Sidebar/Sidebar";

const Container = () => {
  const [users, setUsers] = useState([]);
  const [resultObjects, setResultObjects] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      setSelectedUser(null);
      setResultObjects(null);
      setUsers([]);
      return;
    }
    const values = {
      name: value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => isNaN(item)),
      id: value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => !isNaN(item)),
    };

    setResultObjects(values);
  };

  const [fetchUsers, isLoading, Error] = useFetching(async () => {
    const response = await Service.getUsers(resultObjects);
    if (response) {
      setUsers(response);
    }
  });

  useEffect(() => {
    if (resultObjects !== null) {
      const delay = setTimeout(() => {
        fetchUsers();
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [resultObjects]);

  return Error ? (
    <h2>Ошибка: {Error}</h2>
  ) : (
    <div className="container">
      <div className="container__content">
        <Sidebar
          resultObjects={resultObjects}
          handleInputChange={handleInputChange}
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          isLoading={isLoading}
        ></Sidebar>
        <Main selectedUser={selectedUser}></Main>
      </div>
    </div>
  );
};

export default Container;
