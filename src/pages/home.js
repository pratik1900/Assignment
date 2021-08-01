import React, { useEffect } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersSuccess,
  getUsersFailed,
  getUsersClear,
} from "../store/actions";
import ContactListItem from "../components/contactListItem";
import "../App.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = () => {
  let userData = useSelector(state => state.data);
  let isLoading = useSelector(state => state.loader);
  let error = useSelector(state => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/user")
      .then(response => {
        if (response.status === 200 && response.data.length) {
          console.log("fetched data: ", response);
          dispatch(getUsersSuccess(response.data));
        } else {
          dispatch(getUsersSuccess(null));
        }
      })
      .catch(err => {
        console.log({ err });
        dispatch(getUsersFailed(err.message));
      });
    return () => {
      //Clear Data on unmount
      dispatch(getUsersClear());
    };
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <div className="errorContainer">
          <div className="errorText">{error}</div>
        </div>
      ) : (
        <div>
          {isLoading && <CircularProgress />}
          {!isLoading && userData?.length ? (
            <>
              <div className="headingContainer">
                <div className="headingText">USERS FOUND</div>
                <hr className="headingUnderline" />
              </div>
              <ul className="contactlist">
                {userData.map(user => (
                  <ContactListItem key={user.id} user={user} />
                ))}
              </ul>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

// Home.propTypes = {};

export default Home;
