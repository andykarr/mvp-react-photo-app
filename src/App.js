import './App.css';
import React from 'react';


function App() {


  async function sendPhotoRandom() {

    // Choose random photo object from original list

    // apply ipfsRun(photo-object)

    // take result and display it in the Pop Up success (photo sent)

    // remove photo object from original list, so no one else can receive it again.



  }

  async function sendFilteredPhoto() {

    // Update List of images based on user selected attributes - LOADED from the original.js list
    // dynamically 

    // Choose random photo object from original list

    // apply ipfsRun(photo-object)

    // take result and display it in the Pop Up success (photo sent)

    // remove photo object from original list, so no one else can receive it again.



  }


  return (
    <div className="App">
      <div className="title">
        Welcome to Photo Send - Andy Photography !
      </div>

      {/* <button className="my-button" onClick={getGreetingFromGreeter}>
        Get Current Greeting
      </button> */}
      <p>
      </p>
      <button className="my-button" onClick={sendPhotoRandom}>
        Send Random Photo
      </button>
      {/* LIST OF CITY ATTRIBUTES / TIME OF DAY / CAMERA / Artist
      All loaded dynamically from the list of Objects
      User can filter preferences here */}
      <button className="my-button" onClick={sendFilteredPhoto}>
        Send Photo
      </button>

    </div>
  );
}

export default App;
