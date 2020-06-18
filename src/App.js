import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const TopicList = (props) => {
  return (
    <div>
      <h1>Topic List</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  return (
    <div>
      <h1>Topic Detail {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
