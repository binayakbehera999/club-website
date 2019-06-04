import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Chip, withStyles } from "@material-ui/core";
import "font-awesome/css/font-awesome.min.css";

const styles = {
  card: {
    width: "80%"
  },
  media: {
    height: 300,
    margin: 10
  },
  nameHover: {
    height: "6rem"
  },
  chip: {
    color: "#212121",
    marginLeft: "1.5rem",
    marginTop: "1.3rem"
  }
};

const CustomCard = ({ details, classes }) => {
  let [hoverOn, setHoverOn] = useState(false);
  return (
    <Card
      className={classes.card}
      onMouseEnter={() => setHoverOn(true)}
      onMouseLeave={() => setHoverOn(false)}
      className={classes.card}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://avatars.servers.getgo.com/2205256774854474505_medium.jpg"
          title={details.name}
        />
        <div
          className={classes.nameHover}
          style={{ backgroundColor: "#EEEEEE" }}
        >
          {hoverOn ? (
            <CardContent className={classes.nameHover}>
              <center>
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
              </center>
            </CardContent>
          ) : (
            <CardContent>
              <div>
                <Typography
                  gutterBottom
                  component="title"
                  variant="title"
                  align="center"
                  gutterBottom
                >
                  {details.name}
                </Typography>
                <Typography
                  gutterBottom
                  component="subheading"
                  variant="subheading"
                  align="center"
                >
                  {details.position}
                </Typography>
              </div>
            </CardContent>
          )}
        </div>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(CustomCard);
