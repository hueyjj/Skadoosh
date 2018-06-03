import React, { Component } from 'react';

import PropTypes from "prop-types";

import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class Report extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card
          className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/3qP3dCy.jpg"
            title="Officer cat"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="headline"
              component="h2"
            >
              Cat Reporter
            </Typography>
            <Typography
              component="p"
            >
              Apologies! You were expecting something useful instead you got me, the fat cat.
              <br />
              <br />
              <br />
              Here's something interesting:
              <br />
              <br />
              Cats make about 100 different sounds. Dogs make only about 10.
              <br />
              <br />
              <br />
              Therefore, we cats are superior than dogs.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href="https://www.youtube.com/watch?v=SXnR4vXWP9A"
              target="_blank"
            >
              Watch some cat videos to dilute your fustration
            </Button>
            <Tooltip
              id="tooltip-top"
              title="Doesn't work! Too bad!"
              placement="top">
              <Button
                size="small"
                color="primary"
              >
                Report me!
              </Button>
            </Tooltip>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Report.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Report);