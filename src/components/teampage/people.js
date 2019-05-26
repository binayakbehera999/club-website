import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CustomCard from "./card";
import { withStyles } from "@material-ui/core";
import team from "/home/binayak/Documents/club-website/src/config/members.yaml";
import "font-awesome/css/font-awesome.min.css";
import { PropTypes } from "prop-types";

const styles = {
    grid: {
        marginTop: "3rem",
        marginLeft: "18rem",
        paddingRight: "10rem",
        align: "center",
        width: "75%"
    },

    heading: {
        color: "#6d48e5",
        marginTop: "10rem"
    },

    hr: {
        width: "30%"
    },
    gridItem: {
        paddingBottom: "2rem",
        paddingLeft: "4rem"
    }
};

const People = props => {
    const { classes } = props;
    return (
        <div>
            <Typography
                component="h5"
                variant="display2"
                align="center"
                className={classes.heading}
            >
                MEET THE TEAM
            </Typography>
            <hr className={classes.hr} />
            <Grid container spacing={1} className={classes.grid}>
                {Object.keys(team.members).map(val => (
                    <Grid
                        item
                        xs={12}
                        lg={4}
                        md={6}
                        className={classes.gridItem}
                    >
                        <CustomCard details={team.members[val]} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

People.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(People);
