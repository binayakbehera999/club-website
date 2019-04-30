import React from "react";
import data from "../config/members.yaml";
import { object } from "prop-types";
import NavigationBar from "../components/Navigationbar";
import TeamList from "../containers/meettheteam";

const Team = () => {
    return (
        <div>
            <NavigationBar />
            <TeamList />
        </div>
    );
};

export default Team;
