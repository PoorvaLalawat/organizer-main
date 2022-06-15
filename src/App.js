import React from 'react';
import './App.css';
import {Container, Heading} from '@chakra-ui/react'
import AddTodo from './components/todoComponents/AddTodo';
import TodoList from './components/todoComponents/TodoList';
import VisibilityFilter from './components/todoComponents/VisibilityFilter';


import BreakTime from './components/pomodoroComponents/BreakTime';
import SessionTime from './components/pomodoroComponents/SessionTime';
import Timer from './components/pomodoroComponents/Timer';

import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className='App-container'>

      {/* for todo list */}
        <div className='main-one'>
       <Container maxW="container.sm">
      <Heading my="4"> Todo List</Heading>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
    </Container>
    </div>

<div className='flex-container'>

{/* FOR POMODORO */}
     <div className='main-two'>
    <Heading my="4"> Pomodoro</Heading>
    <span>Be productive!!</span>
    
    <div className='set-time-container'>
         <Timer />
         <div>
        <SessionTime /> 
        <BreakTime />
        </div>
    </div>
    </div> 
     
     {/* FOR MUSIC PLAYER */}
    <div className='main-three'>
    <Heading my="4"> Music Player</Heading>
    <span> Listen to your favourite music! </span>
    <div className='music-listen-container'>
    <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
      
    </div>
    </div>


      
      
    </div>

   </div>
  );
}

export default App;
