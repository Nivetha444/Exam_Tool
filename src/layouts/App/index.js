import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Switch, Route } from 'react-router-dom';
import Login from '../../views/Login/Login';
import styles from './appStyles-jss';
import NotFound from '../../views/NotFound/NotFound';
import classNames from 'classnames';
import Signup from '../../views/Signup/Signup';



class App extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classNames(classes.outerContent, classes.bg)}>

                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/sign-up" component={Signup} /> 
                    
                </Switch>
            </div>
        )
    }

}
App.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(App)
