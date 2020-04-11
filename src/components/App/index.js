import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import Header from '../Header';
import ItemInput from '../ItemInput';
import './App.css';
import Login from '../Login';
import Greeting from '../Greeting';

const App = ({
  items,
  onButtonClick
}) => (
  <div className="App">
    <Header />
   <div className='User-Panel'>
     <Login/>
     <Greeting/>
   </div>
    <main className="App-Content">
      <List className="List">{
        items.map((item, i) => <ListItem key={i}>{item}</ListItem>)
      }</List>
      <ItemInput />
    </main>
  </div>
);

const mapStateToProps = (state) => ({
  items: state.appReducer.items
});

export default connect(
  mapStateToProps
)(App);
