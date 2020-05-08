import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Verification extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to online assessment - VIT University, Vellore </h2>
                <p>Enter 4 digit exam verification code provided by exam invigilators <br/>
                    Your online assessment will start on 23/02/20 at 10:00 
                </p>
                <Button variant="contained" color="primary">Start the assessment</Button> 
                <h6>Note : Please contact exam invigilator if you face any difficulties</h6>
            </div>
        );
    }
}

export default Verification;