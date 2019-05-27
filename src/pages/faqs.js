import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "../components/Navigationbar";
import data from "../config/quest_ans.yaml";
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

      {Object.keys(data.faqs).map((key, id) => (
        <Slide direction="right" in="flase" mountOnEnter unmountOnExit>
          <ExpansionPanel className={classes.exp}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.expsum}
            >
              <Typography className={classes.heading}>
                {data.faqs[key].question}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.details}>
                {data.faqs[key].answer}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Slide>
      ))}
    </div>
  );
}

Faq.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Faq);
