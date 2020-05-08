import React, { Component } from 'react';
import PropTypes from 'prop-types';
import candidatestyles from './candidatestyle';
import classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../../views/NotFound/NotFound';
import Verification from '../../views/Verification/Verification';
import Instructions from '../../views/InstructionPage/Instructions';
import { withStyles } from '@material-ui/core';


class Candidate extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classNames(classes.bg)}>
                <Switch>
                <Route path="/verify" component={Verification}/>
                <Route path="/instruct" component={Instructions}/>
                <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

Candidate.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(candidatestyles)(Candidate);