import MetaTags from "react-meta-tags";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-2.jpg";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";

const UserProfile = props => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [idx, setidx] = useState(1);

  const { error, success } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }));

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName);
        setemail(obj.email);
        setidx(obj.uid);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username);
        setemail(obj.email);
        setidx(obj.uid);
      }
      setTimeout(() => {
        dispatch(resetProfileFlag());
      }, 3000);
    }
  }, [dispatch, success]);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: name || '',
      idx: idx || '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: (values) => {
      dispatch(editProfile(values));
    }
  });


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | eOxegen</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Skote" breadcrumbItem="User Details" />
          <Card>
            {error && error ? <Alert color="danger">{error}</Alert> : null}
            {success ? <Alert color="success">{success}</Alert> : null}
            <CardBody className="p-0 userProfileHolder">
              <Row className="g-0">
                <Col lg="4">
                  <CardBody className="userProfileHolder__left">
                    <div className="d-flex flex-column align-items-center">
                      <div className=" ">
                        <img src={avatar} alt="" className="avatar-md rounded-circle img-thumbnail" />
                      </div>
                      <div className="flex-grow-1 align-self-center ps-2">
                        <div className="text-muted text-center">
                          <h5>{name}</h5>
                          <p className="mb-1">{email}</p>
                          <p className="mb-0">Id no: #{idx}</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Col>
                <Col lg="8">
                  <CardBody className="userProfileHolder__right pt-0">
                    <CardBody className="userProfileHolder__rightCntnt p-2">
                      <Row>
                        <Col md={4}>
                          <div className="pt-2">
                            <label>Phone</label>
                            <p className="card-text">8654123790</p>
                          </div>
                        </Col>
                        <Col md={4}> <div className="pt-2">
                          <label>Name of business</label>
                          <p className="card-text">IndianOcean</p>
                        </div>
                        </Col>
                        <Col md={4}>
                          <div className="pt-2">
                            <label>GST Number</label>
                            <p className="card-text">12212454214</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardBody className="userProfileHolder__rightCntnt p-2">
                      <Row>
                        <Col md={4}>
                          <div className="pt-2">
                            <label>PAN Number </label>
                            <p className="card-text">Pan41212</p>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="pt-2">
                            <label>Address</label>
                            <p className="card-text"> 204/13, Star Colony, Thane-0000</p>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="pt-2">
                            <label>City </label>
                            <p className="card-text">Thane</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardBody className="userProfileHolder__rightCntnt p-2">
                      <Row>
                        <Col md={4}>
                          <div className="pt-2">
                            <label>Pincode </label>
                            <p className="card-text">226158</p>
                          </div>
                        </Col>

                        <Col md={4}>
                          <div className="pt-2">
                            <label>State </label>
                            <p className="card-text">Maharashtra</p>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="pt-2">
                            <label>Reg. No </label>
                            <p className="card-text">121545</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardBody className="userProfileHolder__rightCntnt p-2">
                      <Row>
                        <Col md={4}>
                          <div className="pt-2">
                            <label>Licence validity </label>
                            <p className="card-text">upyo 2022 </p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>

                  </CardBody>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment >
  );
};

export default withRouter(UserProfile);
