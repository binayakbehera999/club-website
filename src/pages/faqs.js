import React from "react";
import Link from "gatsby-link";
import NavigationBar from "../components/Navigationbar";

const outerTypo = {
  fontFamily: "Roboto",
  fontSize: `28px`,
  marginLeft: "20%"
};

const innerTypo = {
  fontFamily: "Roboto",
  fontSize: `20px`,
  backgroundColor: "#EAEDED",
  borderRadius: "20px",
  textAlign: "left",
  maxWidth: `57%`,
  marginLeft: "20%"
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
