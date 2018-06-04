import React, { Component } from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';

import SearchForm from "./SearchForm";
import SearchResult from './SearchResult';

const termTest = [
  {
    value: "2017Fall",
    label: "2017 Fall"
  },
  {
    value: "2018Winter",
    label: "2018 Winter"
  },
  {
    value: "2018Spring",
    label: "2018 Spring"
  },
  {
    value: "2018Fall",
    label: "2018 Fall"
  },
];

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  container: {
    display: "inline-block",
    flexWrap: "wrap",
  },
  column: {
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
  paper: {
    display: "inline-block",
    margin: "auto",
    marginTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit * 8,
    minWidth: 500,
    minHeight: 900,
    maxHeight: 900,
  },
  scroll: {
    overflow: "scroll",
  },
  card: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardMargin: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
  },
});

/**
 * Creates search page
 * @class
 */
class Search extends Component {
  constructor(props) {
    super(props);

    this.createUserCourseCards = this.createUserCourseCards.bind(this);
  }

  createUserCourseCards() {
    const {
      classes,
      course,
    } = this.props;
    const {
      selectedCourses,
    } = course;

    return selectedCourses.map((course, index) =>
      <Grid
        item
        xs={3}
      >
        <Card
          key={index}
          className={classNames(
            classes.card,
            classes.cardMargin,
          )}
        >
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/6VFuW7A.jpg"
            title="Some course"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="headline"
              component="h2"
            >
              {course.title}
            </Typography>
            <Typography
              component="p"
            >
              {/* FIXME: For now just show the first 200. Probably better to switch to the cards that can collapse information */}
              {course.description.substring(0, 200)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
            >
              Compare
            </Button>
            <Button
              size="small"
              color="primary"
            >
              Magic
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  render() {
    const {
      classes,
      course,
      addSelectedCourse,
      fetchCourse,
    } = this.props;

    return (
      <div>
        <div
          className={classNames(
            classes.root,
            // this._handleFlex(),
          )}
          ref={input => { this.container = input }}
        >
          <Paper
            elevation={4}
            className={classes.paper}
          >
            <SearchForm
              fetchCourse={fetchCourse}
            />
          </Paper>
          <Paper
            elevation={4}
            className={classNames(
              classes.paper,
              classes.scroll,
            )}
          >
            <SearchResult
              course={course}
              addSelectedCourse={addSelectedCourse}
            />
          </Paper>
        </div>
        <Grid
          container
          spacing={24}
        >
          {this.createUserCourseCards()}
        </Grid>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);