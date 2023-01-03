import React from "react";
import { useStyles } from "./Style";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginFormBanner from "./components/LoginFormBanner/LoginFormBanner";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  const classes = useStyles();

  return (
    // <div className="grid grid-cols-2 w-full max-w-[8000px] mx-auto max-h-screen overflow-hidden">
    //   <LoginForm />
    //   <LoginFormBanner />
    // </div>
    <Dashboard />
  );
}
