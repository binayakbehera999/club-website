import React from "react";
import NavigationBar from "../components/Navigationbar";
import Typography from "@material-ui/core/Typography";
import People from "../components/people";

class TeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.hoverOff = this.hoverOff.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
    }

    hoverOn() {
        this.setState({ hover: true });
    }
    hoverOff() {
        this.setState({ hover: false });
    }

    render() {
        return (
            <People
                hover={this.state.hover}
                hoverOn={this.hoverOn}
                hoverOff={this.hoverOff}
            />
        );
    }
}

export default TeamList;
