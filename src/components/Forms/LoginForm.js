import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';
import logo from './../../assets/logo.png';
import brand from './../../api/dummy/brand';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import styles from './form-jss';

const required = value => (value == null ? 'Required' : undefined);
const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined
);

class LoginForm extends Component {
    state = {
        showPassword: false
    }
    render() {
        const {
            classes,
            handleSubmit,
            pristine,
            submitting,
            deco,
        } = this.props;
        const { showPassword } = this.state;
        return (
            <Fragment>
                <Hidden mdUp>
                    <NavLink to="/" className={classNames(classes.brand, classes.outer)}>
                        <img src={logo} alt={brand.name} />
                        {brand.name}
                    </NavLink>
                </Hidden>
                <Paper className={classNames(classes.paperWrap, deco && classes.petal)}>
                    <Hidden smDown>
                        <div className={classes.topBar}>
                            <NavLink to="/" className={classes.brand}>
                                <img src={logo} alt={brand.name} />
                                {brand.name}
                            </NavLink>
                            <NavLink to="/sign-up" className={classes.navBtn}>
                                <Button size="small" className={classes.buttonLink}>
                                    <ArrowForward></ArrowForward>
                      Create new account
                    </Button>
                            </NavLink>
                        </div>
                    </Hidden>
                    <Typography variant="h4" className={classes.title} gutterBottom>
                        Sign In
                </Typography>
                    <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
                        Lorem ipsum dolor sit amet
                </Typography>

                    <section className={classes.formWrap}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <Field
                                        name="email"
                                        component={TextFieldRedux}
                                        placeholder="Your Email"
                                        label="Your Email"
                                        required
                                        validate={[required, email]}
                                        className={classes.field}
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <Field
                                        name="password"
                                        component={TextFieldRedux}
                                        type={showPassword ? 'text' : 'password'}
                                        label="Your Password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="Toggle password visibility"
                                                        onClick={this.handleClickShowPassword}
                                                        onMouseDown={this.handleMouseDownPassword}
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        required
                                        validate={required}
                                        className={classes.field}
                                    />
                                </FormControl>
                            </div>
                            <div className={classes.optArea}>
                                <FormControlLabel className={classes.label} control={<Field name="checkbox" component={CheckboxRedux} />} label="Remember" />
                                <Button size="small" to="/reset-password" className={classes.buttonLink}>Forgot Password</Button>
                            </div>
                            <div className={classes.btnArea}>
                                <Button variant="contained" color="primary" size="large" type="submit">
                                    Continue
                        <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
                                </Button>
                            </div>
                        </form>
                    </section>
                </Paper>
            </Fragment>
        )
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired
}
const LoginFormReduxed = reduxForm({
    form: 'immutableExample',
    enableReinitialize: true,
})(LoginForm);

export default withStyles(styles)(LoginFormReduxed);
