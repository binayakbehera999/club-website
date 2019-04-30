import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles, Chip } from "@material-ui/core";
import data from "/home/binayak/Documents/club-website/src/config/members.yaml";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";

const styles = {
    grid: {
        marginTop: "2rem"
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
        height: "8rem"
    },
    chip: {
        marginLeft: 40,
        color: "#212121"
    },
    hovermargin: {
        marginTop: "1.5rem"
    }
};

const People = props => {
    const { classes } = props;
    return (
        <Grid spacing={16} className={classes.grid}>
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
                                    <Chip
                                        label={<i className="fa fa-envelope" />}
                                        className={classes.chip}
                                        component="a"
                                        href="#chip"
                                        clickable
                                    />
                                    <Chip
                                        label={<i className="fa fa-envelope" />}
                                        className={classes.chip}
                                        component="a"
                                        href="#chip"
                                        clickable
                                    />
                                    <Chip
                                        label={<i className="fa fa-envelope" />}
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

export default withStyles(styles)(People);
