import React from "react";
import Signin from "./components/signIn/Signin";
import Dashboard from "./components/dashboard/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";


export default function Main() {
  const { isAuthenticated } = useAuth0();

  console.log(isAuthenticated);

  return (
    <div>
        {isAuthenticated ? <Dashboard /> : <Signin />}
    </div>
  );
}
