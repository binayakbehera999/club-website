import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles, Chip, Avatar } from "@material-ui/core";
import data from "/home/binayak/Documents/club-website/src/config/members.yaml";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";

const styles = {
    grid: {
        marginTop: "10rem"
    },
    card: {
        minHeight: "100%"
    },
    media: {
        height: 250,
        margin: 10
    },
    name: {
        backgroundColor: "#EEEEEE"
    },
    name_hover: {
        backgroundColor: "white",
        height: "6rem"
    },
    chip: {
        color: "#212121",
        marginLeft: "2rem",
        marginTop: "1.3rem"
    },
    hr: {
        width: "30%"
    },
    heading: {
        color: "#6d48e5"
    }
};

const People = props => {
    const { classes } = props;
    return (
        <Grid spacing={16} className={classes.grid}>
            <Typography
                component="h5"
                variant="display2"
                align="center"
                className={classes.heading}
            >
                MEET THE TEAM
            </Typography>
            <hr className={classes.hr} />
            <Grid item xs={2}>
                <Card className={styles.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://avatars.servers.getgo.com/2205256774854474505_medium.jpg"
                            title={data.members.member1.name}
                        />
                        <div
                            onMouseEnter={props.hoverOn}
                            onMouseLeave={props.hoverOff}
                            className={classes.name_hover}
                            style={styles.name}
                        >
                            {props.hover ? (
                                <CardContent className={classes.name_hover}>
                                    <Chip
                                        label={
                                            <i className="fa fa-github-square fa-2x web-link-icon" />
                                        }
                                        className={classes.chip}
                                        component="a"
                                        href="#chip"
                                        clickable
                                    />
                                    <Chip
                                        label={
                                            <i className="fa fa-facebook-square fa-2x web-link-icon " />
                                        }
                                        className={classes.chip}
                                        component="a"
                                        href="#chip"
                                        clickable
                                    />
                                    <Chip
                                        label={
                                            <i className="fa fa-linkedin-square fa-2x web-link-icon" />
                                        }
                                        className={classes.chip}
                                        component="a"
                                        href="#chip"
                                        clickable
                                    />
                                </CardContent>
                            ) : (
                                <CardContent>
                                    <div className={classes.hovermargin}>
                                        <Typography
                                            gutterBottom
                                            component="title"
                                            variant="title"
                                            align="center"
                                            gutterBottom
                                        >
                                            {data.members.member1.name}
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            component="subheading"
                                            variant="subheading"
                                            align="center"
                                        >
                                            {data.members.member1.position}
                                        </Typography>
                                    </div>
                                </CardContent>
                            )}
                        </div>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
};

People.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(People);
