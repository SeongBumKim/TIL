import React, { Component } from 'react';
import BookList from './components/BookList';
import Books from './Books';
import BookDetail from './components/BookDetail';

import { Grid } from 'semantic-ui-react'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      books : Books,
      book : Books[0],
    }
  }

  handleClick = (selectBook) => {
    this.setState({
      book : selectBook
    });
  }

  render() {
    const {books, book} = this.state
    return (
      <div>
        <Grid container columns={2}>
          <Grid.Column>
            <BookList books={books} onSelect={(selectBook)=>this.setState({book : selectBook})}/> 
          </Grid.Column>
          <Grid.Column>
            <BookDetail book={book}/>
          </Grid.Column>
        </Grid>
        
        
      </div>
    );
  }
}

export default App;