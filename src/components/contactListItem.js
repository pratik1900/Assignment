import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Avatar from "@material-ui/core/Avatar";

function ContactListItem({ user }) {
  const getInitials = str => {
    const arr = str.split(" ");
    const initialsArr = arr.map(item => item[0]);
    return initialsArr.join("");
  };

  return (
    <div key={user.id}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={{
          pathname: `/users-details/${user.id}`,
          state: {
            userInfo: user,
          },
        }}
      >
        <div className="contactListItem">
          <Avatar style={{ backgroundColor: "#f7bd59" }}>
            {getInitials(user.username)}
          </Avatar>
          <span className="contactListItemName">{user.username}</span>
        </div>
      </Link>
    </div>
  );
}

export default ContactListItem;
