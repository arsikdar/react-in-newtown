import React from 'react';
import './App.css';
import Box from './components/Box';
import Veg from './components/Veg';
import NonVeg from './components/NonVeg';
import TopicList from './components/TopicList'
import CommentList from './components/CommentList';
import A from './components/A'

function App() {
  return (
    <div className="container">
      <hr />
      <h1>react - level-2</h1>
      <hr />
      <A color="red" />
      <A color="green" />
      <A color="blue" />
      <hr />
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6">
          <TopicList />
        </div>
        <div className="col-12 col-sm-6 col-md-6">
          <CommentList />
        </div>
      </div>
      <hr />
      <Box>
        <Veg />
        <Veg />
      </Box>
      <hr />
      <Box>
        <NonVeg />
        <NonVeg />
      </Box>
    </div>
  );
}

export default App;
