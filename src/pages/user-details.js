import React from "react";
import { Link, useLocation } from "react-router-dom";

function UserDetails(props) {
  const { name, phone, username, website, email } =
    useLocation().state.userInfo;

  return (
    <>
      <Link to="/">Back</Link>
      <div>Details</div>
      <div>{name}</div>
      <div>{phone}</div>
      <div>{username}</div>
      <div>{website}</div>
      <div>{email}</div>
    </>
  );
}

export default UserDetails;
