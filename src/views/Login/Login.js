import React, { Component } from 'react';
import LoginForm from '../../components/Forms/LoginForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from '../../components/Forms/form-jss';
class Login extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.userFormWrap}>
                        <LoginForm />
                    </div>
                </div>
            </div>
            // <div>
            //      <LoginForm />
            // </div>
        );
    }


}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Login);
