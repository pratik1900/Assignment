import React from "react";
import { Link } from "react-router-dom";

function ContactListItem({ user }) {
  return (
    <div key={user.id}>
      <button>
        <Link
          to={{
            pathname: `/users-details/${user.id}`,
            state: {
              userInfo: user,
            },
          }}
        >
          {user.username}
        </Link>
      </button>
    </div>
  );
}

export default ContactListItem;
