import React from 'react';
import './SessionTime.css';
import { incSession,decSession } from '../../redux/actions/actCreators';
import { useSelector, useDispatch } from "react-redux"; 

const SessionTime = ()=> {
        const { timerRunning, sessionLength} = useSelector(state => state.pomoReducer);
        const dispatch = useDispatch();
        const _incSession = () => dispatch(incSession());
        const _decSession = () => dispatch(decSession());
    return (
        <div className='sessiontime-container'>
            <h2 id='session-label'>Session Length</h2>
            <div className='button-container'>
                <button
                    className='button-child'
                    id='session-increment'
                    onClick={timerRunning === false && sessionLength < 60 ? _incSession : null}
                >
                +
                </button>
                
                <h3
                    id='session-length'
                >
                {sessionLength}
                </h3>
                
                <button
                    className='button-child'
                    id='session-decrement'
                    onClick={timerRunning === false && sessionLength > 1 ? _decSession : null}
                >
                -
                </button>
            </div>
        </div>
    )
}

export default SessionTime;