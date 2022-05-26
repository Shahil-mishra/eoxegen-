import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
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
    InputGroup,
} from "reactstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";


const AddCustomer = () => {
    const [modal, setmodal] = useState(false);
    const [modalOpen, setmodalOpen] = useState({
        selectedModel: '',
        modaltitle: '',
    });


    const openModal = (name, title) => {
        setmodalOpen({ 'selectedModel': name, 'modaltitle': title })
        setmodal(!modal)
    }

    const contactEmergency = [
        {
            name: "Rakesh",
            relatioship: "Father",
            contact: "+91 2365412758",
            view: ""
        },
        {
            name: "Pooja",
            relatioship: "Mother",
            contact: "+91 2365412758",
            view: ""
        },

    ];

    const contactColumns = [
        { dataField: 'name', text: 'Name', sort: true },
        { dataField: 'relatioship', text: 'Relatioship' },
        { dataField: 'contact', text: 'Contact' },

        // {
        //     dataField: 'view ',
        //     text: 'Action',
        //     formatter: rankFormatter,
        //     headerAttrs: { width: 50 },
        //     attrs: { width: 50, class: "EditRow" }

        // },

    ];


    function rankFormatter(cell, row, rowIndex, formatExtraData) {
        return (
            <div style={{
                textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal",
                display: "flex"
            }}>
                <i className="bx bx-pencil fs-5" onClick={() => openModal("emergencyContact", "Emergency Contact Details")} ></i>
                <i className="bx bx-trash-alt fs-5"></i>
            </div>
        );
    }


    const familyTable = [
        {
            name: "Nikhil",
            relationship: "Spouse",
            dob: "12 June 1980",
            phone: "+91 2365412758",
            view: ""
        },
    ];

    const familyColumns = [
        { dataField: 'name', text: 'Name', sort: true },
        { dataField: 'relationship', text: 'Relationship' },
        { dataField: 'dob', text: 'D.O.B' },
        { dataField: 'phone', text: 'Contact' },

        // {
        //     dataField: 'view ',
        //     text: 'Action',
        //     formatter: familyFormatter,

        // },

    ];

    function familyFormatter(cell, row, rowIndex, formatExtraData) {
        return (
            < div style={{
                textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal",
                display: "flex"
            }}>
                <i className="bx bx-pencil fs-5" onClick={() => openModal("familyDetails", "Family Details")} ></i>
                <i className="bx bx-trash-alt fs-5 ms-1"></i>
            </div>
        );
    }

 
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Customer | eOxegen </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Customer" />
                    <Row>
                        <Col md={7} lg={7} xl={9}>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col md={12} lg={6}>
                                            <div className="d-flex justify-content-start">
                                                <div className="avatar rounded bg-info bg-soft p-1 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }} >
                                                    <span className="avatar-content m-0 h4"> ND </span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-between ms-2">
                                                    <div className="user-info mb-1"><h4 className="mb-0">Nikhil D</h4>
                                                        <span className="text-capitalize card-text">GST Manager</span>
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                                        <button className="d-flex btn btn-outline-info btn-sm  "><i className="bx bx-pencil fs-5"></i> </button>
                                                        <button className="d-flex btn btn-outline-danger btn-sm  "><i className="bx bx-trash-alt fs-5"></i> </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center mt-3 user-total-numbers">
                                                <div className="col-6 d-flex align-items-center mr-2">
                                                    <div className="color-box bg-light-primary">
                                                        <div className="avatar rounded bg-info bg-soft p-1 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }} >
                                                            <span className="avatar-content h4 m-0 d-flex"> <i className="bx bx-user"></i> </span>
                                                        </div>
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0">Employee Id</h6><small>TT-001</small>
                                                    </div>
                                                </div>
                                                <div className="col-6 d-flex align-items-center">
                                                    <div className="color-box bg-light-success">
                                                        <div className="avatar rounded bg-info bg-soft p-1 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }} >
                                                            <span className="avatar-content h4 m-0 d-flex"> <i className="bx bx-calendar"></i> </span>
                                                        </div>
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0">Date of Join</h6>
                                                        <small>1<sup>st</sup> Jan 2013</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12} lg={6}>
                                            <div className="user-info-wrapper">
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <div className="col-4 user-info-title">
                                                        <i className="bx bx-phone h5 me-1"></i>
                                                        <span className="user-info-title font-weight-bold mb-0 card-text">Phone</span>
                                                    </div>
                                                    <p className="col-8 mb-0 card-text">+91 2145789630</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center my-50">
                                                    <div className="col-4 user-info-title">
                                                        <i className="bx bx-envelope h5 me-1"></i>
                                                        <span className="user-info-title font-weight-bold mb-0 card-text">Email</span>
                                                    </div>
                                                    <p className="col-8 mb-0 card-text">nikhil@gmail.com</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center my-50">
                                                    <div className="col-4 user-info-title">
                                                        <i className="bx bx-cake h5 me-1"></i>
                                                        <span className="user-info-title font-weight-bold mb-0 card-text">Birthday</span>
                                                    </div>
                                                    <p className="col-8 text-capitalize mb-0 card-text">24th July 1991</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center my-50">
                                                    <div className="col-4 user-info-title">
                                                        <i className="bx bx-map h5 me-1"></i>
                                                        <span className="user-info-title font-weight-bold mb-0 card-text">Address</span>
                                                    </div>
                                                    <p className="col-8 mb-0 card-text">204/13, Star Colony, Thane-0000</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <div className="col-4 user-info-title">
                                                        <i className="bx bx-user h5 me-1"></i>
                                                        <span className="user-info-title font-weight-bold mb-0 card-text">Gender</span>
                                                    </div>
                                                    <p className="col-8 mb-0 text-capitalize card-text">Male</p>
                                                </div>
                                            </div>

                                        </Col>

                                    </Row>
                                </CardBody>
                            </Card>

                        </Col>
                        <Col md={5} lg={5} xl={3}>
                            <Card>
                                <CardBody>

                                    <CardTitle className="d-flex justify-content-between align-items-start mb-1">
                                        <span>Current Policy</span>
                                        <span className="mt-1 badge rounded-pill bg-success">INR 5 Lakh</span>
                                    </CardTitle>
                                    <h6 className="text-muted card-subtitle">Family Floater Plan</h6>

                                    <ul className="list-unstyled my-1  mt-2">
                                        <li><span className="align-middle">Term 5-62 Years</span></li>
                                        <li className="my-25"><span className="align-middle">21 JAN 2021 -20 JAN 2022</span></li>
                                        <li><span className="align-middle">Family Members -4</span></li>
                                    </ul>
                                    <div className="d-flex flex-wrap gap-1 mt-2">
                                        <button type="button" className="btn btn-sm  btn-primary w-xs ">Upgrade Plan</button>
                                        <button type="button" className="btn btn-sm  btn-warning w-xs ">Share Policy</button>
                                    </div>

                                </CardBody>
                            </Card>

                        </Col>

                        <Col md={6} >
                            <Card>
                                <CardBody>
                                    <CardTitle className="d-flex justify-content-between align-items-center mb-2">
                                        <span>Personal Information</span>

                                        {/* <button type="button" onClick={() => openModal("personalInfo", "Personal Information")} className="btn btn-sm btn-outline-info d-flex">
                                            <i className="bx bx-edit font-size-16 "></i>  </button> */}

                                    </CardTitle>
                                    <div className="pt-1">
                                        <div className="d-flex justify-content-between pt-1">
                                            <span className="user-info-title mb-0 card-text">Phone</span>
                                            <p className="card-text">8654123790</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-1">
                                            <span className="user-info-title mb-0 card-text">Nationality</span>
                                            <p className="card-text">Indian</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-1">
                                            <span className="user-info-title mb-0 card-text">Religion</span>
                                            <p className="card-text">Hindu</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-1">
                                            <span className="user-info-title mb-0 card-text">Marital Status</span>
                                            <p className="card-text">Married</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-1">
                                            <span className="user-info-title mb-0 card-text">Employment of Spouse</span>
                                            <p className="card-text">House Wife</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-1">
                                            <span className="user-info-title mb-0 card-text">No of Children</span>
                                            <p className="card-text">02</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6} >
                            <Card>
                                <CardBody>
                                    <CardTitle > Emergency Contact </CardTitle>
                                    <div className="table-rep-plugin">
                                        <div className="table-responsive mb-0" data-pattern="priority-columns" >
                                            <BootstrapTable classNAme="table-sm" keyField='id' data={contactEmergency} columns={contactColumns} />
                                        </div></div>
                                </CardBody>
                            </Card>

                        </Col>
                        <Col md={12} >
                            <Card>
                                <CardBody>
                                    <CardTitle > Family Details </CardTitle>

                                    <div className="table-rep-plugin">
                                        <div className="table-responsive mb-0 " data-pattern="priority-columns" >
                                            <BootstrapTable classNAme="table-sm" keyField='id' data={familyTable} columns={familyColumns} />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <Modal
                isOpen={modal}
                role="dialog"
                autoFocus={true}
                centered={true}
                className="modal-lg"
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
                        {modalOpen.modaltitle}
                    </ModalHeader>
                    <ModalBody>

                        {modalOpen.selectedModel == "personalInfo" ? <>
                            <Row>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className=" " htmlFor=" ">Nationality</label>
                                        <select className="form-select">
                                            <option value="0" selected="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className=" " htmlFor=" ">Religion</label>
                                        <select className="form-select">
                                            <option value="0" selected="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className=" " htmlFor=" ">Marital Status </label>
                                        <select className="form-select">
                                            <option value="0" selected="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className=" " htmlFor=" ">Employment Of Wife</label>
                                        <select className="form-select">
                                            <option value="0" selected="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </Col>

                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className="form-label">Phone</label>
                                        <input className="form-control" type="text" placeholder="+91 98979098970" />
                                    </div>
                                </Col>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className=" " htmlFor=" ">No. of Child</label>
                                        <select className="form-select">
                                            <option value="0" selected="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} ></Col>
                            </Row>
                        </> : null}



                        {modalOpen.selectedModel == "emergencyContact" ? <>
                            <Row>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className="form-label">Name</label>
                                        <input className="form-control" type="text" placeholder="+91 98979098970" />
                                    </div>
                                </Col>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className=" " htmlFor=" ">Relationship</label>
                                        <select className="form-select">
                                            <option value="0" selected="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </Col>



                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className="form-label">Phone</label>
                                        <input className="form-control" type="text" placeholder="+91 98979098970" />
                                    </div>
                                </Col>

                                <Col sm={12} md={6} ></Col>
                            </Row>
                        </> : null}
                        {modalOpen.selectedModel == "familyDetails" ? <>
                            <Row>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className="form-label">Name</label>
                                        <input className="form-control" type="text" placeholder="+91 98979098970" />
                                    </div>
                                </Col>
                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className=" " htmlFor=" ">Relationship</label>
                                        <select className="form-select">
                                            <option value="0" selected="">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </Col>



                                <Col sm={12} md={6} >
                                    <div className="mb-2">
                                        <label className="form-label">Phone</label>
                                        <input className="form-control" type="text" placeholder="+91 98979098970" />
                                    </div>
                                </Col>
                                <Col sm={12} md={6} >
                                    <label className="form-label">Date Of Birth</label>
                                    <InputGroup>  
                                        <Flatpickr
                                            className="form-control d-block"
                                            placeholder="dd M,yyyy"
                                            options={{
                                                altInput: true,
                                                altFormat: "F j, Y",
                                                dateFormat: "Y-m-d"
                                            }}
                                        />
                                    </InputGroup>
                                </Col>

                                <Col sm={12} md={6} ></Col>
                            </Row>
                        </> : null}
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" color="danger" onClick={() => { setmodal(!modal); }} >
                            Cancel
                        </Button>
                        <Button type="button" color="success">Save</Button>
                    </ModalFooter>
                </div>
            </Modal> */}
        </React.Fragment>
    )
}

export default AddCustomer