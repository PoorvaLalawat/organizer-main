import React from 'react';
import { resetTimer } from '../../redux/actions/actCreators';
import { useDispatch } from 'react-redux';
const Reset = (
    // { resetTimer }
    ) => {
    const dispatch = useDispatch();
    const _resetTimer = () => dispatch(resetTimer())
    return (
        <div className='reset-container'>
            <button
                className='button-child'
                id='reset'
                onClick={_resetTimer}
                >
                Reset
            </button>
        </div>
    )
}

export default Reset;
