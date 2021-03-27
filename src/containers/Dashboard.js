import Header from "../components/header/Header";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";

export default function Dashboard() {
  return (
    <div>
      <Header username={"Jane Doe"} />
      <NavBar />
      <SideBar />
    </div>
  );
}
