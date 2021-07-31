const getInitials = str => {
  const arr = str.split(" "); //in-case if name has to be used instead of username, which might have first name, last name, etc.
  const initialsArr = arr.map(item => item[0]);
  return initialsArr.join("");
};

export default getInitials;
