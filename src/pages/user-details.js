import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function UserDetails(props) {
  const { name, phone, username, website, email, address } =
    useLocation().state.userInfo;

  const { city, street, suite, zipcode } = address;

  return (
    <>
      <Link to="/">Back</Link>
      <div className="userDetailsContainerOuter">
        <div className="userDetailsContainerInner">
          <div>{name}</div>
          <div>{phone}</div>
          <div>{username}</div>
          <div>{website}</div>
          <div>{email}</div>
          <div>{`${suite}, ${street}, ${city}, ${zipcode}`}</div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
