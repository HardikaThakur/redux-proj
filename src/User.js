import React from "react";
const User = (props) => {
  console.warn(props);
  return (
    <div>
      <h2> User Data{props.data.name}</h2>
    </div>
  );
};
export default User;
