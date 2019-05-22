import React from "react";
import IndexContainer from "../containers/indexContainer";
import NavigationBar from "../components/Navigationbar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import data1 from "../config/sessionToBeConducted.yaml";
import data2 from "../config/sessionAlreadyConducted.yaml";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 345,
    maxHeight: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    height: 140,
    objectFit: "cover"
  },
  grid: {
    marginTop: "1.8em",
    marginBottom: "1.8em"
  }
});

const grid = {
  marginTop: "1.8em",
  marginBottom: "1.8em",
  marginLeft: "1.2em"
};

const title = {
  margin: "auto 1.8em"
};

export default session => (
  <div>
    <NavigationBar />
    <SessionsToBeConducted />

    <div className={styles.root} style={grid}>
      <Grid container spacing={24} className={styles.grid}>
        {Object.keys(data1.sessions).map((key, id) => (
          <SessionsToBeConductedCard
            classes={styles}
            title={data1.sessions[key].title}
            date={data1.sessions[key].date}
          />
        ))}
      </Grid>
    </div>

    <Divider style={grid} />

    <SessionsAlreadyConducted />
    <div className={styles.root} style={grid}>
      <Grid container spacing={24} className={styles.grid}>
        {Object.keys(data2.sessions).map((key, id) => (
          <SessionsAlreadyConductedCard
            classes={styles}
            title={data2.sessions[key].title}
            date={data2.sessions[key].date}
          />
        ))}
      </Grid>
    </div>
    <Footer />
  </div>
);

const SessionsToBeConducted = () => {
  return (
    <div style={title}>
      <h1>Sessions to be conducted</h1>
    </div>
  );
};

const SessionsAlreadyConducted = () => {
  return (
    <div style={title}>
      <h1>Session already conducted</h1>
    </div>
  );
};

function SessionsToBeConductedCard(props) {
  const { classes } = props;
  return (
    <Grid item xs={12} sm={6} lg={3} md={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title - {props.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Date - {props.date}
          </Typography>
        </CardContent>
        <CardActions>
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

function SessionsAlreadyConductedCard(props) {
  const { classes } = props;
  return (
    <Grid item xs={12} sm={6} lg={3} md={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title - {props.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Date - {props.date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Document
          </Button>
          <Button size="small" color="primary">
            Feedback
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

SessionsToBeConductedCard.propTypes = {
  classes: PropTypes.object.isRequired
};

SessionsAlreadyConductedCard.propTypes = {
  classes: PropTypes.object.isRequired
};
