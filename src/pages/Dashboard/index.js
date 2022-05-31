import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  CardTitle,
} from "reactstrap";

import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { Link } from "react-router-dom";

//import action
import { getChartsData as onGetChartsData } from "../../store/actions";

import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";


import CardUser from "./CardUser"
import SalesAnalytics from "./sales-analytics"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector, useDispatch } from "react-redux";
// import index from "pages/Dashboard-Blog";

const Dashboard = props => {
  const [modal, setmodal] = useState(false);
  const [subscribemodal, setSubscribemodal] = useState(false);

  const { chartsData } = useSelector(state => ({
    chartsData: state.Dashboard.chartsData
  }));

  const series = [
    {
      name: "Current",
      data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
    },
    {
      name: "Previous",
      data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
    },
  ]

  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#556ee6", "#f1b44c"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    markers: {
      size: 3,
      strokeWidth: 3,

      hover: {
        size: 4,
        sizeOffset: 2,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  }

  const reports = [
    { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
    { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
    {
      title: "Average Price",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
  ];

  const endorsementRequest = [
    { endorsement: "1222656", reason: "Address Change", date: "24 jan 2021", type: "Financial", status: "in process", lastUpdate: "25 Apr 2022" },
    { endorsement: "1222657", reason: "Contact Info Update", date: "10 jan 2021", type: "Non financial", status: "completed", lastUpdate: "25 Apr 2022" },
    { endorsement: "1222657", reason: "Add Spouse", date: "22 Mar 2021", type: " Financial", status: "completed", lastUpdate: "25 Apr 2022" },
  ]
  const claimRequest = [
    { claim: "1222656", reason: "any reason", date: "24 jan 2021", lossDate: "24 jan 2021", status: "in process", lastUpdate: "25 Apr 2022" },
    { claim: "1222656", reason: "any reason", date: "24 jan 2021", lossDate: "24 jan 2021", status: "in process", lastUpdate: "25 Apr 2022" },
    { claim: "1222656", reason: "any reason", date: "24 jan 2021", lossDate: "24 jan 2021", status: "completed", lastUpdate: "25 Apr 2022" },
  ]

  useEffect(() => {
    setTimeout(() => {
      setSubscribemodal(true);
    }, 2000);
  }, []);

  const [periodData, setPeriodData] = useState([]);
  const [periodType, setPeriodType] = useState("yearly");

  useEffect(() => {
    setPeriodData(chartsData);
  }, [chartsData]);

  const onChangeChartPeriod = pType => {
    setPeriodType(pType);
    dispatch(onGetChartsData(pType));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetChartsData("yearly"));
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Dashboard | eOxegen</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs hideBreadcrum breadcrumbItem="Dashboard" />
          <Row>
            <Col md={3}>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <p className="text-muted fw-medium">Total <br />customers </p>
                      <h5 className="mb-0">20</h5>
                    </div>
                    <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                      <span className="avatar-title rounded-circle bg-primary">
                        <i className="bx bx-user text-white h2 m-0"></i>
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <p className="text-muted fw-medium">Total Policies count<br /> with value </p>
                      <h5 className="mb-0">20</h5>
                    </div>
                    <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                      <span className="avatar-title rounded-circle bg-success">
                        <i className="bx bx-rupee text-white h2 m-0"></i>
                      </span>
                    </div>

                  </div>

                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <p className="text-muted fw-medium">Claims<br /> In-process</p>
                      <h5 className="mb-0">20</h5>
                    </div>
                    <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                      <span className="avatar-title rounded-circle bg-danger">
                        <i className="bx bx-edit text-white h2 m-0"></i>
                      </span>
                    </div>

                  </div>

                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <p className="text-muted fw-medium">Endorsement<br /> requests</p>
                      <h5 className="mb-0">20</h5>
                    </div>
                    <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                      <span className="avatar-title rounded-circle bg-warning">
                        <i className="bx bx-list-ul text-white h2 m-0"></i>
                      </span>
                    </div>

                  </div>

                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={7}>
              <Card>
                <CardBody>
                  <CardUser options={options} series={series} />
                </CardBody>
              </Card>
            </Col>
            <Col md={5}>
              <Card>
                <CardBody>
                  <SalesAnalytics />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <CardTitle>List of endorsement request in process </CardTitle>

              <div className="table-rep-plugin">
                <div
                  className="table-responsive mb-0"
                  data-pattern="priority-columns"
                >
                  <Table
                    id="tech-companies-1"
                    className="table table-striped table-bordered"
                  >
                    <Thead>
                      <Tr>
                        <Th>Endorsement Number</Th>
                        <Th data-priority="1">Reason</Th>
                        <Th data-priority="3">Date of request</Th>
                        <Th data-priority="1">Endorsement type </Th>
                        <Th data-priority="3">Current Status</Th>
                        <Th data-priority="3">Last updates on</Th>
                        <Th data-priority="6">Log </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {endorsementRequest.map((data, indx) => {
                        return <>
                          <Tr key={indx}>
                            <td> {data.endorsement}</td>
                            <td>{data.reason}</td>
                            <td>{data.date}</td>
                            <td>{data.type}</td>
                            <td>
                              <span className={`badge rounded-pill text-uppercase p-2  ${data.status === "completed" ? "bg-success bg-soft text-success" : " bg-warning bg-soft text-warning"}`}>
                                {data.status}
                              </span>

                            </td>
                            <td>{data.lastUpdate}</td>
                            <td> <button type="button" className="btn btn-success btn-sm">
                              <i className="fas fa-eye"></i>
                            </button></td>

                          </Tr>
                        </>
                      })}
                    </Tbody>
                  </Table>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>List of claims in process </CardTitle>

              <div className="table-rep-plugin">
                <div
                  className="table-responsive mb-0"
                  data-pattern="priority-columns"
                >
                  <Table
                    id="tech-companies-2"
                    className="table table-striped table-bordered"
                  >
                    <Thead>
                      <Tr>
                        <Th>Claim No.</Th>
                        <Th data-priority="1">Claim reason</Th>
                        <Th data-priority="3">Date of claim</Th>
                        <Th data-priority="1">Loss date</Th>
                        <Th data-priority="3">Current status</Th>
                        <Th data-priority="3">Last updated on </Th>
                        <Th data-priority="6">Log </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {claimRequest.map((data, indx) => {
                        return (

                          <Tr key={indx}>
                            <td>{data.claim}</td>
                            <td>{data.reason}</td>
                            <td>{data.date}</td>
                            <td>{data.lossDate}</td>
                            <td>
                              <span className={`badge rounded-pill text-uppercase p-2  ${data.status === "completed" ? "bg-success bg-soft text-success" : " bg-warning bg-soft text-warning"}`}>
                                {data.status}
                              </span>
                            </td>
                            <td>{data.lastUpdate}</td>
                            <td> <button type="button" className="btn btn-success btn-sm">
                              <i className="fas fa-eye"></i>
                            </button></td>
                          </Tr>
                        )
                      })}

                    </Tbody>
                  </Table>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>

      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={() => {
          setmodal(!modal);
        }}
      >
        <div>
          <ModalHeader
            toggle={() => {
              setmodal(!modal);
            }}
          >
            Order Details
          </ModalHeader>
          <ModalBody>
            <p className="mb-2">
              Product id: <span className="text-primary">#SK2540</span>
            </p>
            <p className="mb-4">
              Billing Name: <span className="text-primary">Neal Matthews</span>
            </p>

            <div className="table-responsive">
              <Table className="table table-centered table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src={modalimage1} alt="" className="avatar-sm" />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">
                          Wireless Headphone (Black)
                        </h5>
                        <p className="text-muted mb-0">$ 225 x 1</p>
                      </div>
                    </td>
                    <td>$ 255</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src={modalimage2} alt="" className="avatar-sm" />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">
                          Hoodie (Blue)
                        </h5>
                        <p className="text-muted mb-0">$ 145 x 1</p>
                      </div>
                    </td>
                    <td>$ 145</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Sub Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Shipping:</h6>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal(!modal);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
