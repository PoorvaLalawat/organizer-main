import React, { useEffect } from 'react';
import './Timer.css';
import Reset from './Reset';
import StartStop from './StartStop';
import {switchBreak,switchSession,decSeconds } from '../../redux/actions/actCreators';
import { useSelector, useDispatch } from "react-redux";

const Timer = () => {
    const { timerRunning, secondsLeft, interval} = useSelector(state => state.pomoReducer);
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft - minutes * 60;
    const dispatch = useDispatch();

    const _decSeconds = () => dispatch(decSeconds());
    const _switchBreak = () => dispatch(switchBreak());
    const _switchSession = () => dispatch(switchSession());

    useEffect(() => {       
        let countdown = null;
        if (timerRunning && secondsLeft > 0) {
            countdown = setInterval(() => {
                // decSeconds();
                _decSeconds();
            }, 1000);
        } else if (timerRunning && secondsLeft === 0) {
            countdown = setInterval(() => {
                // decSeconds();
                _decSeconds();
            }, 1000);
            if (interval === 'Session') {
                _switchBreak();
            } else if (interval === 'Break') {
                _switchSession();
            }
        } else {
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    },
    [timerRunning, secondsLeft, interval, switchBreak, switchSession, decSeconds]);

    return(
        <div className='timer-container'>
            <h2 id='timer-label'>{interval}</h2>
            <div id='time-left'>{minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}</div>
            <StartStop />
            <Reset />
        </div>
    )
}

export default Timer;