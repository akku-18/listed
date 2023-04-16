import React, { useState } from "react";
import Signin from "./signIn/Signin";
import Dashboard from "./dashboard/Dashboard";

export default function Main() {
  const [click, setClick] = useState(false);
  return (
    <div>
        {click ? <Dashboard /> : <Signin setClick={setClick}/>}
    </div>
  );
}
