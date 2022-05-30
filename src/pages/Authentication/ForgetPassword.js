import PropTypes from "prop-types"; 
import MetaTags from "react-meta-tags";
import React from "react";
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userForgetPassword } from "../../store/actions";

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import loginBackground from "../../assets/images/loginbackground1.svg"

const ForgetPasswordPage = props => {
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      dispatch(userForgetPassword(values, props.history));
    }
  });

  const { forgetError, forgetSuccessMsg } = useSelector(state => ({
    forgetError: state.ForgetPassword.forgetError,
    forgetSuccessMsg: state.ForgetPassword.forgetSuccessMsg,
  }));

  return (
    <React.Fragment>
      <MetaTags>
        <title>
          Forget Password | eOxegen
        </title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages  ">

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
          <Col md={6} lg={4}>
            <Card className="overflow-hidden mb-0  h-100  ">

              <CardBody className="p-3 p-md-5 d-flex flex-column  justify-content-center">
                <div className="text-primary ">
                  <h5 className="card-title"> Forgot Password? 🔒</h5>
                  <p className="text-muted">Enter your email and well send you instructions to reset your password </p>
                </div>
                <div className="p-2">
                  {forgetError && forgetError ? (
                    <Alert color="danger" style={{ marginTop: "13px" }}>
                      {forgetError}
                    </Alert>
                  ) : null}
                  {forgetSuccessMsg ? (
                    <Alert color="success" style={{ marginTop: "13px" }}>
                      {forgetSuccessMsg}
                    </Alert>
                  ) : null}

                  <Form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
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
                    <Row className="mb-3">
                      <Col className="text-end">
                        <button
                          className="btn btn-primary w-md "
                          type="submit"
                        >
                          Reset
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div className="mt-5 text-center">
                  <p> Go back to{" "}
                    <Link to="login" className="font-weight-medium text-primary">
                      Login
                    </Link>{" "}
                  </p>

                </div>
              </CardBody>
            </Card>

          </Col>
        </Row>

      </div>
    </React.Fragment>
  );
};

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);
