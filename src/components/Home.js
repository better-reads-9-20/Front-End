import React from 'react';
import { useState, useEffect } from 'react';
import '../style/dashboard.css';
import { staticData, staticResults } from '../statics/staticResults';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: '8px',
    borderRadius: '10px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    padding: '4px',
  },
}));

function Dashboard(props){
  const [ books, setBooks ] = useState([]);
  const [ popular, setPopular ] = useState(staticData);

  const classes = useStyles();

  const findBooks = (form) => {
    form.preventDefault();
    console.log(form.summary);
  }

  return(
    <div className="dashboard">  

        <FormComponent onSubmit={findBooks} />

      <div className="popular">
        <h3>Popular Demand 🔥</h3>
        <div className="book-cards">
          {
            books.length > 0 ?
              books.map(book => {

              }) : 
              popular.map(book => (
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={book.image}
                    title={book.title}
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        <h3>{book.title}</h3>
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        <h3>{book.author}</h3>
                      </Typography>
                    </CardContent>
                    <Box component="fieldset" mb={5} borderColor="transparent">
                      <Typography component="legend">Rating</Typography>
                      <Rating name="disabled" value={book.rating} readOnly />
                    </Box>
                  </div>
                </Card>
              ))
          }
        </div>
      </div>
    </div>
  );
}

function FormComponent({ onSubmit }){
  return (
    <Formik 
      initialValues = 'search'
      onSubmit = {onSubmit}
      render = {props => {
        return(
          <Form className='search-form' >
              <Field 
              name='summary' 
              type='text' 
              placeholder='Search' 
              className='textbox'/>

          <input 
            title="Search" 
            value="⚡ Let's Go!" 
            type="submit" 
            className="button">
          </input>
          </Form>
          );
        }}
      />
  );
}

export default Dashboard;
