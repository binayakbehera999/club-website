import React from "react";
import NavigationBar from "../components/Navigationbar";
import TeamList from "../containers/meettheteam";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <div>
      <NavigationBar />
      <TeamList />
      <Footer />
    </div>
  );
};

export default Team;
