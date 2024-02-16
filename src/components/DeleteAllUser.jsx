import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/userSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearAllUsers = () => {
    dispatch(deleteUsers());
  };

  return (
    <div className="delete-btn">
      <span>
        <button className="btn" onClick={clearAllUsers}>
          Clear Users
        </button>
      </span>
    </div>
  );
};

export default DeleteAllUser;
