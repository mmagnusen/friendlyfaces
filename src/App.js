import React, { Component } from 'react';
import { Kimson, ShalomOne, ShalomTwo } from './assets'
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

  render() {

    const { profiles } = this.state;

    return (
      <div className="Gallery">
        {profiles && profiles.map((profile) => <div key={profile.image}><img src={profile.image} alt={`profile from ${profile.creator}`}/></div>)}
      </div>
    )};
}

export default App;
