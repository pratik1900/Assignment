import React, { useEffect } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersSuccess,
  getUsersFailed,
  getUsersClear,
} from "../store/actions";
import ContactListItem from "../components/contactListItem";

// import PropTypes from "prop-types";

const Home = props => {
  let userData = useSelector(state => state.data);
  let isLoading = useSelector(state => state.loader);
  let error = useSelector(state => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
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

  useEffect(() => console.log("USER DATA:", userData), [userData]);
  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {isLoading && <div>LOADING...</div>}
          {!isLoading && userData?.length ? (
            <>
              <div> USERS FOUND :</div>
              <ul>
                {userData.map(user => (
                  <ContactListItem user={user} />
                ))}
              </ul>
            </>
          ) : (
            <div>NO USERS FOUND</div>
          )}
        </div>
      )}
    </div>
  );
};

// Home.propTypes = {};

export default Home;
