import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/userSlice";

const DisplayUsers = () => {
  const data = useSelector((store) => store.user);
  // console.log(data)

  const dispatch = useDispatch();

  const deleteUsers = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      {data.map((user, id) => (
        <div key={id} className="users-list">
          <li>{user}</li>
          <span>
            <button className="btn" onClick={() => deleteUsers(id)}>
              delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
