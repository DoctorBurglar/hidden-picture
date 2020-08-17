import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useAuth } from "reactfire";

const AuthButtons = () => {
  const auth = useAuth;
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => true,
    },
  };
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />;
};

export default AuthButtons;
