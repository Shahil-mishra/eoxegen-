import React from "react";
import MetaTags from 'react-meta-tags';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { Container, Row, Col, CardBody, Card, Button, Form, Label, Input, FormFeedback } from "reactstrap";

// import images
import profileImg from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import loginBackground from "../../assets/images/loginbackground1.svg"



import { Link } from "react-router-dom";

const LockScreen = () => {

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <React.Fragment>
      <MetaTags>
        <title>Lock Screen | eOxegen</title>
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
          <Col md={6} lg={4}>
            <Card className="overflow-hidden mb-0  h-100  ">
              
              <CardBody className="p-3 p-md-5 d-flex flex-column  justify-content-center">
                <div>

                </div>
                <div className="p-2">
                  <Form className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >


                    <div className="mb-3">
                      <Label className="form-label">Password</Label>
                      <Input
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        type="password"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password || ""}
                        invalid={
                          validation.touched.password && validation.errors.password ? true : false
                        }
                      />
                      {validation.touched.password && validation.errors.password ? (
                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                      ) : null}
                    </div>

                    <div className="text-end">
                      <Col xs="12" className="text-end">
                        <Button
                          color="primary"
                          className=" w-md "
                          type="submit"
                        >
                          Unlock
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
                <div className="mt-5 text-center">
                  <p>
                    Not you ? return{" "}
                    <Link
                      to="/login"
                      className="fw-medium text-primary"
                    >
                      {" "}
                      Sign In{" "}
                    </Link>{" "}
                  </p>
                   
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
export default LockScreen;
