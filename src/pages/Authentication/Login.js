import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import React from "react";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Social Media Imports
import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// actions
import { loginUser, socialLogin } from "../../store/actions";

// import images
import profile from "assets/images/profile-img.png";
import loginBackground from "../../assets/images/loginbackground1.svg"
import logo from "assets/images/logo.svg";

//Import config
import { facebook, google } from "../../config";

const Login = props => {
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "admin@themesbrand.com" || '',
      password: "123456" || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => { 
      dispatch(loginUser(values, props.history));
    }
  });

  const { error } = useSelector(state => ({
    error: state.Login.error,
  }));

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    dispatch(loginUser(values, props.history));
  };

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.history, type));
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.history, type));
    }
  };

  //handleGoogleLoginResponse
  const googleResponse = response => {
    signIn(response, "google");
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  const facebookResponse = response => {
    signIn(response, "facebook");
  };

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | eOxegen</title>
      </MetaTags>
      <div className="account-pages  ">
        {/* <Container> */}
        <Row className="justify-content-center g-0 login__row">
          <Col md={6} lg={8} className="d-none d-md-flex">
            <div className="loginTOP p-3">
              <Link to="/" className="auth-logo-light">
                <img src={logo} alt="" className=" " height="33" />
              </Link>
            </div>
            <div className="d-none d-lg-flex align-items-center p-5 col-sm-12 col-lg-8">
              <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                <img className="img-fluid" src={loginBackground} alt="Login V2" />
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} >
            <Card className="overflow-hidden mb-0  h-100  ">

              <CardBody className="p-3 p-md-5 d-flex flex-column  justify-content-center">
                <div className="text-primary ">
                  <h5 className="card-title">Welcome Back !</h5>
                  <p className="text-muted">Please sign-in to your account and start the adventure</p>
                </div>
                <div className=" ">
                  <Form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    {error ? <Alert color="danger">{error}</Alert> : null}

                    <div className="mb-3">
                      <Label className="form-label">Email</Label>
                      <Input
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email ? true : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">Password</Label>
                      <Input
                        name="password"
                        value={validation.values.password || ""}
                        type="password"
                        placeholder="Enter Password"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.password && validation.errors.password ? true : false
                        }
                      />
                      {validation.touched.password && validation.errors.password ? (
                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                      ) : null}
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customControlInline"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customControlInline"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="mt-3 d-grid">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>




                    <div className="mt-4 text-center">
                      <Link to="/forgot-password" className="text-muted">
                        <i className="mdi mdi-lock me-1" />
                        Forgot your password?
                      </Link>
                    </div>


                    <div className="mt-4 text-center">
                      <h5 className="font-size-14 mb-3">Sign in with</h5>

                      
                    </div>

                    <p className="text-center mt-3">
                      <span className="mr-25 font-small-1">By clicking here, you agree to our</span>
                      <a href=""><span className="font-small-5 text-underline">Customer Agreement</span></a></p>
                  </Form>
                  {/* <div className="mt-5 text-center">
                    <p>
                      Don&#39;t have an account ?{" "}
                      <Link to="/register" className="fw-medium text-primary">
                        {" "}
                        Signup now{" "}
                      </Link>{" "}
                    </p>
                  </div> */}
                </div>
              </CardBody>
            </Card>

          </Col>
        </Row>
        {/* </Container> */}
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
