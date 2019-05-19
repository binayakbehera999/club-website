import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "../components/Navigationbar";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Slide from "@material-ui/core/Slide";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const styles = theme => ({
  heading: {
    fontSize: "110%"
  },
  exp: {
    maxWidth: "70%",
    margin: "auto",
    marginBottom: "0.7%"
  },
  expsum: {
    padding: "2%"
  },
  details: {
    fontSize: "100%"
  }
});
function Faq(props) {
  const { classes } = props;
  return (
    <div>
      <NavigationBar />
      <Slide direction="right" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="left" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>How can I join?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              Zairza conducts its formal events for recruitment into the club.
              The pre-requisite includes passion for technology and an
              inquisitive mind. Please contact the club administration for the
              exact procudures.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="right" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>
              What is the scope of Zairza?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              The talent pool of the club is widely ranged. We have members
              working on Web Development, Android Development, Embedded Systems,
              IOT, Robotics, Machine Learning, Computer Vision and Artificial
              Intelligence. Our Alumnis are placed in prestigious organization
              around the globe.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="left" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="left" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>
              I have a Tech project. How can Zairza help me?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              Zairza can provide you with space and environment to work on your
              project. We have stable fast internet connection and all the
              tools, components and other required resources for your project.
              Given proper report, we can also fund your project. Apart from
              this, we have senior experienced mentors who will be more than
              happy to guide you throughout your project.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="right" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>
              What are the club timings?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              Zairza is open 24 hrs a day. Just coordinate with the members for
              the key.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>
      <Slide direction="left" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>How can I join?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              Zairza conducts its formal events for recruitment into the club.
              The pre-requisite includes passion for technology and an
              inquisitive mind. Please contact the club administration for the
              exact procudures.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="right" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>
              What is the scope of Zairza?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              The talent pool of the club is widely ranged. We have members
              working on Web Development, Android Development, Embedded Systems,
              IOT, Robotics, Machine Learning, Computer Vision and Artificial
              Intelligence. Our Alumnis are placed in prestigious organization
              around the globe.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="left" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>
              I have a Tech project. How can Zairza help me?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              Zairza can provide you with space and environment to work on your
              project. We have stable fast internet connection and all the
              tools, components and other required resources for your project.
              Given proper report, we can also fund your project. Apart from
              this, we have senior experienced mentors who will be more than
              happy to guide you throughout your project.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="right" in="flase" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.expsum}
          >
            <Typography className={classes.heading}>
              What are the club timings?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>
              Zairza is open 24 hrs a day. Just coordinate with the members for
              the key.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>
    </div>
  );
}

Faq.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Faq);
