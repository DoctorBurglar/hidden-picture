import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAppProvider, SuspenseWithPerf, AuthCheck } from "reactfire";
import { firebaseConfig } from "./firebase-config";
import AuthButtons from "./components/AuthButtons/AuthButtons";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { ThemeProvider } from "@material-ui/core/styles";
import "fontsource-roboto";

// const theme = {
//   primaryColor: "red",
// };

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf
        traceId={"loading-app-status"}
        fallback={<p>loading</p>}
      >
        <AuthCheck fallback={<AuthButtons />}>
          <CssBaseline />
          {/* <ThemeProvider theme={theme}> */}
          <App />
          {/* </ThemeProvider> */}
        </AuthCheck>
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
