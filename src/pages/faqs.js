import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "../components/Navigationbar";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Slide from "@material-ui/core/Slide";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const styles = theme => ({
  paper: {
    backgroundColor: "#37474f",
    maxWidth: "70%",
    margin: "auto",
    padding: "10% 5%"
  },
  typo: {
    color: "#ffebee",
    fontSize: "225%"
  },
  exp: {
    maxWidth: "70%",
    margin: "auto"
  },
  heading: {
    fontSize: "100%"
  },
  typ: {
    fontSize: "100%"
  },
  expsum: {
    border: "none",
    padding: "1%"
  }
});

function Faq(props) {
  const { classes } = props;

  return (
    <div>
      <NavigationBar />
      <Zoom in="false">
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3" className={classes.typo}>
            Following are the most frequently asked questions about zairza
          </Typography>
        </Paper>
      </Zoom>

      <Slide direction="right" in="false" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            className={classes.expsum}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typ}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="left" in="false" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            className={classes.expsum}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>
              I have a Tech project. How can Zairza help me?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typ}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>
      <Slide direction="right" in="false" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            className={classes.expsum}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typ}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="left" in="false" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            className={classes.expsum}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typ}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>
      <Slide direction="right" in="false" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            className={classes.expsum}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typ}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="left" in="false" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            className={classes.expsum}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typ}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>
      <Slide direction="right" in="false" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            className={classes.expsum}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typ}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Slide>

      <Slide direction="left" in="false" mountOnEnter unmountOnExit>
        <ExpansionPanel className={classes.exp}>
          <ExpansionPanelSummary
            className={classes.expsum}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>Why Zairza?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typ}>
              For people persuing careers in computers and/or robotics, writing
              code, developing softwares, and creating exceptional things.
              That's what we do here. We do things and we help people who are
              really interested into them.
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
