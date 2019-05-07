import React from "react";
import Link from "gatsby-link";
import NavigationBar from "../Layouts/Navigationbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles/MuiThemeProvider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const outerTypo = {
  fontFamily: "Lato",
  fontSize: `28px`,
  marginLeft: "310px"
};

const innerTypo = {
  fontSize: `20px`,
  backgroundColor: "#EAEDED",
  borderRadius: "20px",
  textAlign: "left",
  maxWidth: `1125px`,
  marginLeft: "310px"
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const FAQ = props => {
  const { classes } = props;

  return (
    <div>
      <div>
        <NavigationBar />
        <h1 align="center">FAQs</h1>
      </div>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h5" gutterBottom style={outerTypo}>
          Why Zairza?
        </Typography>
        <Typography component="p" gutterBottom style={innerTypo}>
          For people persuing careers in computers and/or robotics, writing
          code, developing softwares, and creating exceptional things. That's
          what we do here. We do things and we help people who are really
          interested into them.
        </Typography>
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" gutterBottom style={outerTypo}>
          How can I join?
        </Typography>
        <Typography component="p" gutterBottom style={innerTypo}>
          Zairza conducts its formal events for recruitment into the club. The
          pre-requisite includes passion for technology and an inquisitive mind.
          Please contact the club administration for the exact procudures.
        </Typography>
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" gutterBottom style={outerTypo}>
          What is the scope of Zairza?
        </Typography>
        <Typography component="p" gutterBottom style={innerTypo}>
          The talent pool of the club is widely ranged. We have members working
          on Web Development, Android Development, Embedded Systems, IOT,
          Robotics, Machine Learning, Computer Vision and Artificial
          Intelligence. Our Alumnis are placed in prestigious organization
          around the globe.
        </Typography>
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" gutterBottom style={outerTypo}>
          I have a Tech project. How can Zairza help me?
        </Typography>
        <Typography component="p" gutterBottom style={innerTypo}>
          Zairza can provide you with space and environment to work on your
          project. We have stable fast internet connection and all the tools,
          components and other required resources for your project. Given proper
          report, we can also fund your project. Apart from this, we have senior
          experienced mentors who will be more than happy to guide you
          throughout your project.
        </Typography>
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" gutterBottom style={outerTypo}>
          What is the scope of Zairza?
        </Typography>
        <Typography component="p" gutterBottom style={innerTypo}>
          The talent pool of the club is widely ranged. We have members working
          on Web Development, Android Development, Embedded Systems, IOT,
          Robotics, Machine Learning, Computer Vision and Artificial
          Intelligence. Our Alumnis are placed in prestigious organization
          around the globe.
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(FAQ);
