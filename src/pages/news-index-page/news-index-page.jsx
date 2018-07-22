import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import InfoIcon from '@material-ui/icons/Info';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';
import { RootStyle, PaperStyle } from '../../lib/styles';

const styles = theme => ({
  root: RootStyle,
  paper: PaperStyle(theme),
  newsWrapperStyle: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  card: {
    maxWidth: '100%',
    marginTop: '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  chip: {
    marginLeft: '5px',
  },
  avatarSecondary: {
    backgroundColor: red[300],
    color: 'white',
  },
});

class NewsIndexPage extends Component {
  constructor() {
    super();

    this.state = {
      expanded: undefined,
    };
  }

  handleExpandClick = (id) => {
    this.setState({ expanded: id });
  };

  openInNewTab(url) {
    window.open(url, '_blank').focus();
  }

  render() {
    const { classes, news } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.newsWrapperStyle}>
          <Grid container spacing={24}>
            { news && (
              news.map(article => {
                return (
                  <Grid item xs={6} key={article.id}>
                    <Card className={classes.card}>
                      <CardHeader
                        avatar={
                          <Avatar aria-label="Score" className={classes.avatar}>
                            {Math.round(article.score, 2)}
                          </Avatar>
                        }
                        action={
                          <IconButton>
                            <InfoIcon onClick={this.openInNewTab.bind(this, article.url)} />
                          </IconButton>
                        }
                        title={article.title}
                        subheader={moment(article.published_at).format('MMMM Do YYYY')}
                      />
                      <CardMedia
                        className={classes.media}
                        image={article.image_url}
                      />
                      <CardContent>
                        <Typography component="p">
                          {article.description}
                        </Typography>
                      </CardContent>
                      <CardActions className={classes.actions} disableActionSpacing>
                        <Chip
                          avatar={
                            <Avatar aria-label="Read time" className={classes.avatarSecondary}>
                              {article.read_time}
                            </Avatar>
                          }
                          label="Read time"
                          className={classes.chip}
                        />
                        <Chip
                          avatar={
                            <Avatar aria-label="Words" className={classes.avatarSecondary}>
                              {article.word_count}
                            </Avatar>
                          }
                          label="Words"
                          className={classes.chip}
                        />
                        <IconButton
                          className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded === article.id,
                          })}
                          onClick={this.handleExpandClick.bind(this, article.id)}
                          aria-label="Show more"
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </CardActions>
                      <Collapse in={this.state.expanded === article.id} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph variant="body2">
                            Site: {article.site.name}
                          </Typography>
                          <Typography paragraph>
                            Authors: 
                            { article.authors && (
                                article.authors.map(author => author)
                            )}
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

NewsIndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
  news: PropTypes.array.isRequired,
};

export default withStyles(styles)(NewsIndexPage);
