import React from "react";
import IndexContainer from "../containers/indexContainer";
import NavigationBar from "../components/Navigationbar";
import Footer from "../components/Footer";
import Divider from "@material-ui/core/Divider";
import SessionToBeConducted from "../components/session/sessionToBeConducted.js";
import SessionAlreadyConducted from "../components/session/sessionAlreadyConducted.js";

const grid = {
  marginTop: "1.8em",
  marginBottom: "1.8em",
  marginLeft: "1.2em",
  marginRight: "1.2em"
};

export default session => (
  <div>
    <NavigationBar />
    <SessionToBeConducted />
    <Divider style={grid} />
    <SessionAlreadyConducted />
    <Footer />
  </div>
);
