import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { SizeMe } from "react-sizeme";
import sessionToBeConductedData from "../../config/sessionToBeConducted.yaml";

const styles = {
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: "20%"
  }
};

const grid = {
  marginTop: "1.8em",
  marginBottom: "1.8em",
  marginLeft: "1.2em",
  marginRight: "1.2em"
};

const title = {
  margin: "auto 1.8em"
};

function sessionsToBeConducted(props) {
  const { classes } = props;
  return (
    <div>
      <SessionsToBeConductedTitle />
      <div className={classes.root} style={grid}>
        <Grid container spacing={24}>
          {Object.keys(sessionToBeConductedData.sessions).map((key, id) => (
            <SessionsToBeConductedCard
              classes={classes}
              title={sessionToBeConductedData.sessions[key].title}
              date={sessionToBeConductedData.sessions[key].date}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}

const SessionsToBeConductedTitle = () => {
  return (
    <div style={title}>
      <h1>Sessions to be conducted</h1>
    </div>
  );
};

function CardTitle(cardWidth, title) {
  let alphabetCapacity = (cardWidth - 72) / 9;
  let finalTitle;
  if (alphabetCapacity >= title.length) {
    finalTitle = title;
  } else {
    finalTitle = title.substring(0, alphabetCapacity - 4) + "...";
  }
  return <div>Title - {finalTitle}</div>;
}

function SessionsToBeConductedCard(props) {
  const classes = props.classes;
  const title = props.title;
  return (
    <Grid item xs={12} sm={6} lg={3} md={3}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6">
            <SizeMe>{({ size }) => CardTitle(size.width, title)}</SizeMe>
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Date - {props.date}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Enroll
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

SessionsToBeConductedCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(sessionsToBeConducted);
