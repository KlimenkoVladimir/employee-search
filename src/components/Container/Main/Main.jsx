import React, { useEffect } from "react";
import "./Main.css";
import photo from "../../../photo.png";

const Main = (props) => {
  return (
    <div className="user-info">
      {props.selectedUser ? (
        <>
          <img className="user-info__photo" src={photo} alt="" />
          <div className="user-info__right">
            <h2 className="user-info__header">{props.selectedUser.name}</h2>
            <h2 className="user-info__text">
              <span className="user-info__label">email:</span>{" "}
              {props.selectedUser.email}
            </h2>
            <h2 className="user-info__text">
              <span className="user-info__label">phone:</span>{" "}
              {props.selectedUser.phone}
            </h2>
            <h2 className="user-info__header">О себе</h2>
            <p className="user-info__text--about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </>
      ) : (
        <p className="user-info__text--alert">
          Выберите сотрудника, чтобы посмотреть его профиль
        </p>
      )}
    </div>
  );
};

export default Main;
