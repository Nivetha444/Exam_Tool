import React, { Component } from 'react';
import { CheckBox } from '@material-ui/icons';
import { Button } from '@material-ui/core';

class Instructions extends Component {
    render() {
        return (
            <div>
                <p>Please read the instructions carefully</p>
                <p>General instructions :
                1. Total duration of assessment is 10 minutes.<br/>
                2. The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time avaliable for you to complete the assessment. When the timer reaches zero, the assessment will end by itself. You will not be required to end or submit your assessment.<br/>
                3. The question palette displayed on the right side of the screen will show the status of each question using one of the following symbols : <br/>
                You have not visited the question yet.<br/>
                You have not answered the question.<br/>
                You have answered the question.<br/>
                You have NOT answered the question, but have marked the question for review.<br/>
                You have answered the question, but marked it for review.<br/>
                The marked for review status for a question simply indicates that you would like to look at the question again. If question is answered and marked for review, your answer for that question will be considered in the evaluation.<br/>
                4. You can click on the “>” arrow hich appears to the left of question palette to collapse the question palette thereby maximizing the question window. To view the question palette again, you can click on  which appear on the right side of question window.
                </p>
                <p>Navigating to a question :<br/>
                5. To answer a question, do the following <br/>
                Click on the question number in the question palette at the right of your screen to go that numbered question directly. Note that using option does NOT save your answer to the cureent question.<br/>
                Click on ‘Save & Next’ to save your answer for the current question and then go to the next question.<br/>
                Click on ‘Mark for Review & Next’ to save your answer for the current question, mark it for review, and then go to the next question.<br/>
                </p>
                <p>Answer a question :<br/>
                6. To answer a question, do the following<br/>
                <li>
                To select your answer, click on the button of one of the options<br/>
                To deselect your chosen answer, click on the button of the chosen option again or click on the ‘Clear Response’ button.<br/>
                To change your chosen answer, click on the button of another option.<br/>
                To save your answer, you MUST click on ‘Save & Next’ button.<br/>
                To mark the question for review, click on ‘Mark for Review & Next’ button. If an answer is selected for a question that is Marked for Review, that answer will be considered for evaluation.<br/>
                7. To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.<br/>
                8. Note that ONLY questions for which answers are saved or marked for review after answering will be consireded for evaluation.<br/>
                </li>
                </p>
                <p> Navigation through section :<br/>
                9. Section in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted.<br/>
                10. After clicking the ‘ Save & Next’ button on the last question for a section, you will be automatically be taken to the first question of the next section.<br/>
                11. You can shuffle between tests and questions anytime during the assessment as per your convenience only during the time stimulated.<br/>
                12. Candidates can view the corresponding section summary as part of the legend that appears in every section above the question palette.<br/>
                </p>
                <p>
                    <CheckBox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}/>
                    I have read and understood the instructions and agree to adhere to them</p>
                <Button variant="contained" color="primary">Continue</Button>
            </div>
        );
    }
}

export default Instructions;