import React from 'react';
import {startTimer,stopTimer} from '../../redux/actions/actCreators';
import { useSelector, useDispatch } from "react-redux";

const StartStop = () => {
    const dispatch = useDispatch();
    const { timerRunning} = useSelector(state => state.pomoReducer);
    const _startTimer = () => dispatch(startTimer());
    const _stopTimer = () => dispatch(stopTimer());
    return (
        <div className='start-stop-container'>
            <button
                className='button-child'
                id='start-stop'
                onClick={timerRunning ? _stopTimer : _startTimer}
                >
                Start/Stop
            </button>
        </div>
    )
}

export default StartStop