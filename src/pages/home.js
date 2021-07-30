import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import PropTypes from "prop-types";

const Home = props => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setIsLoading(false);
        if (response.status === 200 && response.data.length) {
          console.log("fetched data: ", response);
          setUserData(response.data);
        } else {
          setUserData(null);
        }
      })
      .catch(err => {
        console.log({ err });
        setError(err.message);
      });
    return clearData;
  }, []);

  useEffect(() => console.log("USER DATA:", userData), [userData]);

  const clearData = () => {
    //Clear Data on unmount
  };

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {userData?.length ? (
            <>
              <div> USERS FOUND :</div>
              <ul>
                {userData.map(user => (
                  <div key={user.id}>
                    <Link
                      to={{
                        pathname: `/users-details/${user.id}`,
                        state: {
                          userInfo: user,
                        },
                      }}
                    >
                      {user.name}
                    </Link>
                  </div>
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
