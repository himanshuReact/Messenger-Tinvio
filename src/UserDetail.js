import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import UserAvatar from './UserAvatar'
import './UserDetails.css';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 1800,
    // flex: '1 0 auto',
  },
});
export default function UserCard() {
  const classes = useStyles();
  return (
    <div className="details__friend">
      <Card p={20} className={classes.root}>
        <div className="user__avatar">
          <UserAvatar />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/*  */}
            Kirsten Mckellar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Capetown, RSA
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {/*  */}
            Nickname:           Killa Kella
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {/*  */}
            Tel:                072 143 9920
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {/*  */}
            Date Of Birth:      July 18, 1988
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {/*  */}
            Gender:             Female
          </Typography>
          <Divider />
          <Typography gutterBottom variant="h6" component="h6">
            {/*  */}
            Language:             English
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card >
    </div>
  );
}

