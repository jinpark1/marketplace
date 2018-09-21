import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345,
    marginTop: '50px',
    marginBottom: '50px',
    margin: 'auto'
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  },
  link: {
    textDecoration: 'none'
  }
};

function ProductsCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
    {console.log('--------testing', props)}
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.productName}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link className={classes.link} to={{ pathname:`/product/${props.productName}`, state: { products: props } }}>
          <Button size="small" color="primary">
            Details
          </Button>
        </Link>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

ProductsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductsCard);