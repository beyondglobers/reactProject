import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from 'react-router-dom';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()} class="btn btn btn-outline-light">
    Log In
  </button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (

    <button onClick={() => logout({ returnTo: window.location.origin })} class="btn btn btn-outline-light">
      Log Out
    </button>


  );
};

const ProfileButton = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (

    // <Link to="/profile">
    //   <button type="button" class="btn btn btn-outline-light">
    //     Profile
    //   </button>
    // </Link>

    <NavLink activeClassName="is-active" to="/profile">
      <button type="button" class="btn btn btn-outline-light">
        Profile
      </button>
    </NavLink>


  );
};


// export default LoginButton;

export {
  LoginButton,
  LogoutButton,
  ProfileButton
}