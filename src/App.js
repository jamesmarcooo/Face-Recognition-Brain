import React, { Component } from 'react';
// import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import 'tachyons'

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Logo />
          <ImageLinkForm />
           {/*<FaceRecognition />*/}
  
        </header>
      </div>
    );
  }
}

export default App;