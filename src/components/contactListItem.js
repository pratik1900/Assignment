import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ContactListItem({ user }) {
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
        <div className="contactlistitem">{user.username}</div>
      </Link>
    </div>
  );
}

export default ContactListItem;
