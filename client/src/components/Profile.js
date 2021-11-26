import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (

      <div class="row justify-content-center mb-5 mt-5" >

        <div class="col-auto">

          {/* <div> */}
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>

        </div>
      </div>

    )
  );
};

export default Profile;