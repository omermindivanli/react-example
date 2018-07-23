import React, { Component } from 'react';
import './App.css';
import EventHandlers from './components/EventHandlers';
import RenderingList from './components/RenderingList';

class App extends Component {
  render() {
    const componentTitles = [
      {
        titleId: 1,
        titleName: 'render'
      },
      {
        titleId: 2,
        titleName: 'event'
      },
      {
        titleId: 3,
        titleName: 'state'
      }
    ];
    return (
      <div className="App">
        <RenderingList titleName={componentTitles.titleName} />
        <EventHandlers />
      </div>
    );
  }
}

export default App;
