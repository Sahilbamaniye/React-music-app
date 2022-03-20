import {useState, useEffect} from 'react';
import Player from './components/Player';


function App() {
  
    const [songs] = useState([
    {
      title: "Arcade X mann mera",
      artist: " starnger things",
      img_src: "./images/arcade.jpg",
      src: "./music/arcade.mp3",
    },
    {
      title: "Waalian",
      artist: " Harnoor",
      img_src: "./images/harnoor.jpg",
      src: "./music/waalian.mp3",
    },
    {
      title: "Main dhondne ko ",
      artist: "arjit singh",
      img_src: "./images/jaye.jpg",
      src: "./music/jaye tu jahan bhi jaye.mp3",
    },
    {
      title: "Nira Ishq ",
      artist: "Guri",
      img_src: "./images/Guri.jpg",
      src: "./music/nira ishq.mp3",
    },

    {
      title: "Let me down slowly ",
      artist: "Gravero",
      img_src: "./images/let me down slowly.jpg",
      src: "./music/let me down slowly.mp3",
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length -1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });

  }, [currentSongIndex]);

  return (
    <div className="App">
      
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
