import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Avatar from "@material-ui/core/Avatar";
import getInitials from "../utility/getInitials";

function UserDetails() {
  const { name, phone, username, website, email, address } =
    useLocation().state.userInfo;

  const { city, street, suite, zipcode } = address;

  return (
    <>
      <Link to="/">
        <ArrowBackIosIcon className="backArrow" />
      </Link>
      <div className="userDetailsContainerOuter">
        <div className="userDetailsContainerInner">
          <Avatar
            style={{
              backgroundColor: "#f7bd59",
              height: "10rem",
              width: "10rem",
            }}
          >
            <span style={{ fontSize: "6rem" }}>{getInitials(username)}</span>
          </Avatar>
          <div className="userDetailsName">{username}</div>
          <div className="userDetailsMeta userDetailsUserName">({name})</div>
          <div className="userDetailsRows">
            <div className="userDetailsRow">
              <PhoneIcon />
              <span className="userDetailsMeta">{phone}</span>
            </div>
            <div className="userDetailsRow">
              <LanguageIcon />
              <span className="userDetailsMeta">{website}</span>
            </div>
            <div className="userDetailsRow">
              <EmailIcon />
              <span className="userDetailsMeta">{email}</span>
            </div>
            <div className="userDetailsRow">
              <HomeIcon />
              <div className="addressRows">
                <div className="userDetailsMeta">{`${suite}, ${street}`}</div>
                <div className="userDetailsMeta">{`${city}, ${zipcode}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
