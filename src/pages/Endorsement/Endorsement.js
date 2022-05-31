import React from "react";
import MetaTags from "react-meta-tags"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Label,
    Input,
    ModalBody,
    ModalFooter,
    Table,
    CardTitle,
} from "reactstrap";
import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"
import { Link } from "react-router-dom";


const customer = [
    {
        endorsementno: "25225",
        customer: "Rahul Saxena",
        Policiesnumber: "256477895423",
        reason: "Address Change",
        daterequest: "5/6/2020",
        type: "Financial",
        currentstatus: "paid",
        lastupdatedon: "5/12/2020",
        log: "",
        state: "Punjab",
        since: "5/12/2020",
        total: 124,

    },

];

// /endorsement/track

const columns = [
    {
        dataField: 'endorsementno',
        text: 'Endorsement No',
        sort: true,
        formatter: pageLink,
    },
    { dataField: 'customer', text: 'Customer' },
    { dataField: 'Policiesnumber', text: 'Policies number' },
    { dataField: 'reason', text: 'Reason' },
    { dataField: 'daterequest', text: 'Date of request' },
    { dataField: 'type', text: 'Endorsement type' },
    {
        dataField: 'currentstatus ',
        text: 'Current Status',
        formatter: familyFormatter,

    },
    {
        dataField: 'lastupdatedon',
        text: 'Last updates  ',
        headerAttrs: { width: 50 },
        attrs: { width: 50, class: "EditRow" }
    },



];

function pageLink(cell, row, rowIndex, formatExtraData) {
    return (
        < div style={{
            textAlign: "center",
            cursor: "pointer",
            lineHeight: "normal",
            display: "flex"
        }}>

            <Link to="/endorsement/track" className="btn btn-link btn btn-link shadow-none p-0"> {row.endorsementno}</Link>

        </div>

    );
}
function familyFormatter(cell, row, rowIndex, formatExtraData) {
    return (
        < div style={{
            textAlign: "center",
            cursor: "pointer",
            lineHeight: "normal",
            display: "flex"
        }}>

            <span className={`badge rounded-pill text-uppercase p-2  ${row.currentstatus === "completed" ? "bg-success bg-soft text-success" : " bg-warning bg-soft text-warning"}`}>
                {row.currentstatus}
            </span>
        </div>

    );
}



const Endorsement = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Endorsement | eOxegen </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Endorsement" />
                    <Row>
                        <Col md={3}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <p className="text-muted fw-medium">Endorsement </p>
                                            <h5 className="mb-0">20</h5>
                                        </div>
                                        <div className="avatar-sm rounded-circle bg-primary bg-soft  align-self-center mini-stat-icon">
                                            <span className="avatar-title rounded-circle bg-primary bg-soft ">
                                                <i className="bx bx-like text-white h2 m-0 text-primary"></i>
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
                                            <p className="text-muted fw-medium">Accepted </p>
                                            <h5 className="mb-0">20</h5>
                                        </div>
                                        <div className="avatar-sm rounded-circle bg-info bg-soft align-self-center mini-stat-icon">
                                            <span className="avatar-title rounded-circle bg-info bg-soft">
                                                <i className="bx bx-check text-white h2 text-info m-0 "></i>
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
                                            <p className="text-muted fw-medium">Rejected</p>
                                            <h5 className="mb-0">20</h5>
                                        </div>
                                        <div className="avatar-sm rounded-circle bg-danger bg-soft align-self-center mini-stat-icon">
                                            <span className="avatar-title rounded-circle  bg-danger bg-soft ">
                                                <i className="bx bx-window-close h2 text-danger m-0"></i>
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
                                            <p className="text-muted fw-medium">In-process</p>
                                            <h5 className="mb-0">20</h5>
                                        </div>
                                        <div className="avatar-sm rounded-circle bg-warning bg-soft align-self-center mini-stat-icon">
                                            <span className="avatar-title rounded-circle bg-warning bg-soft ">
                                                <i className="bx bx-hourglass text-warning h2 m-0"></i>
                                            </span>
                                        </div>

                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">Endorsement Reason</CardTitle>
                                    <BarChart />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">
                                        Endorsement Monthwise
                                    </CardTitle>
                                    <ColumnWithDataLabels />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Card>
                        <CardBody>
                            <CardTitle>Check endorsement status </CardTitle>
                            <div className="mb-0">
                                <Input
                                    type="search"
                                    className="form-control"
                                    id=""
                                    placeholder="Enter endorsement  number"
                                />
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Row className="mb-3 row align-items-center">
                                <Col md={6}><CardTitle>List of claims made</CardTitle></Col>
                                <Col md={6} className="text-end">
                                    {/* <button type="button" className="btn btn-success">
                                    Create new endorsement
                                </button> */}
                                </Col>
                            </Row>
                            <CardTitle>Search Filter </CardTitle>
                            <Row>
                                <Col md={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="">Endorsement No</Label>
                                        <Input type="text" className="form-control" id="" placeholder="Customer name" />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="">Customer name</Label>
                                        <Input type="text" className="form-control" id="" placeholder="Customer name" />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <label className=" " htmlFor="autoSizingSelect">Preference</label>
                                    <select defaultValue="0" className="form-select">
                                        <option value="0">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Col>
                            </Row>


                            <BootstrapTable keyField='id' data={customer} columns={columns} pagination={paginationFactory()} />
                        </CardBody>
                    </Card>

                </Container>

            </div>

        </React.Fragment>
    )
}

export default Endorsement