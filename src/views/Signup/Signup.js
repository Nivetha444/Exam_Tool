import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SignupForm from '../../components/Forms/SignupForm'
import { withStyles } from '@material-ui/core';
import styles from '../../components/Forms/form-jss';

class Signup extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.userFormWrap}>
                        <SignupForm />
                    </div>
                </div>
            </div>
        )
    }
}

Signup.propType = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Signup);
