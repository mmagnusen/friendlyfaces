import React, { Component } from 'react';
import { Kimson, ShalomOne, ShalomTwo } from './assets'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    profiles: [{
      creator: 'Kimson Doan',
      image: Kimson,
      url: 'https://unsplash.com/@doanstopexploring'
    }, 
    {
      creator: 'Shalom Mwenesi',
      image: ShalomOne,
      url: 'https://unsplash.com/@5halom_'
    },
    {
      creator: 'Shalom Mwenesi',
      image: ShalomTwo,
      url: 'https://unsplash.com/@5halom_'
    },]
  };

  componentDidMount() {

  }

  render() {

    const { profiles } = this.state;

    return (
      <div className="Gallery">
        {profiles && profiles.map((profile) => <div key={profile.id}><img src={profile.image}/></div>)}
      </div>
    )};
}

export default App;
