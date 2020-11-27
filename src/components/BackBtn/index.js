import React from 'react';
import { withRouter } from 'react-router-dom';

const BackBtn = (props)=>{
    return(
        <button onClick={props.history.goBack}>
            Back
        </button>
    );
}

export default withRouter(BackBtn);