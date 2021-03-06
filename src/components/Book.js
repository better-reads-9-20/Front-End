import React from 'react';
//redux
// import { connect } from 'react-redux';
// import { setImages } from '../redux/actions';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';



const useStyles = makeStyles({
    card: {
      maxWidth: 275,
      margin: '8px',
      padding: '8px',
      backgroundColor:'white',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


const Book = (props) => {
  // const [ image, setImage ] = ('');

   

    //Material UI
    const classes = useStyles();

    //props later
    const book = props.book;
    console.log('Book props', props)
    console.log('Book props.book', props.book)

    const id = {"bookId": props.book.id}
    console.log('Book props.book.id', props.book.id, 'id', id);

    // if(book.ISBN === null){
    //   return book;
    // }else{
    //   props.image(book.ISBN)
    // }
    


    return (
            <CardContent className={classes.card}>
                <Typography variant="h5" component="h2">
                {book.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {book.authors}
                </Typography>
                <Typography variant="body2" component="p">
                Rating:
                <Rating name="disabled" value={book.rating} readOnly/>
                <br />
                ISBN: {book.ISBN}
                </Typography>
            </CardContent>
    )
}

// const mapStateToProps = state => {
//   return {
//       state: state,
//   }
// }
// export default connect(mapStateToProps, { setImages })(Book);
export default Book;