import React from "react";
import Loader from "../../Loader/Loader";
import "./Sidebar.css";

import photo from "../../../photo.png";

const Sidebar = (props) => {
  console.log(props.selectedUser);

  return (
    <div className="search-section">
      <h2 className="search-section__header">Поиск сотрудников</h2>
      <input
        className="search-section__input"
        placeholder="Введите Id или имя "
        value={props.inputString}
        onChange={props.handleInputChange}
      ></input>
      <h2 className="search-section__header">Результаты</h2>

      <div className="result">
        {props.isLoading ? (
          <Loader />
        ) : props.users.length > 0 ? (
          props.users.map((user) => (
            <button
              className={`user ${
                props.selectedUser?.id === user.id ? "user--selected" : ""
              }`}
              onClick={() => props.setSelectedUser(user)}
              key={user.id}
            >
              <img className="user__photo" src={photo} alt="" />
              <div className="user__info">
                <h3 className="user__name">{user.name}</h3>
                <p className="user__email">{user.email}</p>
              </div>
            </button>
          ))
        ) : (
          <p className="result__text">
            {props.resultObjects ? "ничего не найдено" : "начните поиск"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
