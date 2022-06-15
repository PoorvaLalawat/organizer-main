import React from 'react';
import './BreakTime.css';
import {incBreak,decBreak} from '../../redux/actions/actCreators';
import { useSelector, useDispatch } from "react-redux";

const BreakTime = () => {    
    const { timerRunning, breakLength} = useSelector(state => state.pomoReducer);
    const dispatch = useDispatch();
    const _incBreak = () => dispatch(incBreak());
    const _decBreak = () => dispatch(decBreak());
    return (
        <div className='breaktime-container'>
            <h2 id='break-label'>Break Length</h2>
            <div className='button-container'>
                <button
                    className='button-child'
                    id='break-increment'
                    onClick={timerRunning === false && breakLength < 60 ? _incBreak : null}
                >
                +
                </button>
                
                <h3
                    id='break-length'
                >
                {breakLength}
                </h3>
                
                <button
                    className='button-child'
                    id='break-decrement'
                    onClick={timerRunning === false && breakLength > 1 ? _decBreak : null}
                >
                - 
                </button>
            </div>
        </div>
    )
}

export default BreakTime;