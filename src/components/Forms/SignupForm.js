import React, { Component, Fragment } from 'react';
import { Hidden, withStyles, Paper, Button, Typography, FormControl } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './form-jss';
import logo from './../../assets/logo.png';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import brand from './../../api/dummy/brand';
import { Field, reduxForm } from 'redux-form';
import { TextFieldRedux } from './ReduxFormMUI';

class SignupForm extends Component {
    state = {
        showCandidateForm: false
    }
    handleShowCandidateForm = () => {
        console.log('clcicled')
        this.setState({
            showCandidateForm: !this.state.showCandidateForm
        })
    }
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Hidden mdUp>
                    <NavLink to='/' className={classNames(classes.outer, classes.brand)}>
                        <img src={logo} alt={brand.name} />
                        {brand.name}

                    </NavLink>
                </Hidden>
                <Paper className={classNames(classes.paperWrap, classes.petal)} >
                    <Hidden smDown>
                        <div className={classes.topBar}>
                            <NavLink to='/' className={classNames(classes.brand)}>
                                <img src={logo} alt={brand.name} />
                                {brand.name}
                            </NavLink>
                            <NavLink to='/login' className={classes.navBtn}>
                                <Button className={classes.buttonLink} size='small'>
                                    <ArrowForward></ArrowForward>
                                    Already have an account
                                </Button>
                            </NavLink>
                        </div>
                    </Hidden>
                    <Typography variant="h4" className={classes.title} gutterBottom>Sign Up</Typography>
                    <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
                        Lorem ipsum dolor sit amet
                </Typography>
                    <section>
                        <form>
                            {!this.state.showCandidateForm ?
                                <Fragment>
                                    <div className={classes.signUpFormWrap} >
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="fist_name"
                                                    type="text"
                                                    placeholder="First Name"
                                                    label="First Name"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="last_name"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    label="Last Name"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className={classes.signUpFormWrap}>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="email"
                                                    placeholder="Email address"
                                                    label="Email address"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    label="Password"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="confrim_password"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    label="Confirm Password"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className={classNames(classes.signupBtn)}>
                                        <Button variant="contained" color="primary" size="large" type="button" onClick={() => this.handleShowCandidateForm()}>
                                            Continue
                        <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} />
                                        </Button>
                                    </div></Fragment> :
                                <Fragment>
                                    <div className={classes.signUpFormWrap} >
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="college_name"
                                                    type="text"
                                                    placeholder="College Name"
                                                    label="College Name"
                                                    required
                                                    disabled
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="enrolment_number"
                                                    type="text"
                                                    placeholder="Enrolment Number"
                                                    label="Enrolment Number"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="degree"
                                                    type="text"
                                                    placeholder="Degree"
                                                    label="Degree"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className={classes.signUpFormWrap} >
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="branch"
                                                    type="text"
                                                    placeholder="Branch/Department"
                                                    label="Branch/Department"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="mobile_number"
                                                    type="text"
                                                    placeholder="Mobile Number"
                                                    label="Mobile Number"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="dob"
                                                    type="text"
                                                    placeholder="dd/mm/yyyy"
                                                    label="Date of Birth"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className={classes.signUpFormWrap} >
                                        <div className={classes.formControl}>
                                            <FormControl className={classes.formControl}>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="address"
                                                    type="text"
                                                    placeholder="Address"
                                                    label="Address"
                                                    required
                                                />
                                            </FormControl>
                                        </div>

                                    </div>
                                    <div className={classes.signUpFormWrap} >
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="state"
                                                    type="text"
                                                    placeholder="State"
                                                    label="State"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="city"
                                                    type="text"
                                                    placeholder="City"
                                                    label="City"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl>
                                                <Field
                                                    component={TextFieldRedux}
                                                    name="country"
                                                    type="text"
                                                    placeholder="Country"
                                                    label="Country"
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className={classNames(classes.signupBtn)}>
                                        <Button variant="contained" color="default" size="large" type="button" onClick={() => this.handleShowCandidateForm()}>
                                            <ArrowBack className={classNames(classes.rightIcon, classes.iconSmall)} /> Back

                                        </Button>
                                        <Button variant="contained" color="primary" size="large" type="submit">
                                            Signup
                        <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} />
                                        </Button>
                                    </div>
                                </Fragment>
                            }
                        </form>
                    </section>
                </Paper>
            </Fragment>
        );
    }
}

SignupForm.propTypes = {
    classes: PropTypes.object.isRequired
}

const SignUpFormRedux = reduxForm({
    form: 'immutableExample',
    enableReinitialize: true
})(SignupForm)

export default withStyles(styles)(SignUpFormRedux);
