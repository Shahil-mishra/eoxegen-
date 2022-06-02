import React, { useState, } from "react";
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
    Modal,
    ModalHeader,
} from "reactstrap";
import SimpleBar from "simplebar-react"

import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


const Claims = () => {
    const [modal, setmodal] = useState(false);
    const [modalOpen, setmodalOpen] = useState({
        selectedModel: '',
        modaltitle: '',
    });

    const notofications = [
        {
            date: "13 Mar",
            title: "Form Submitted",
            desc: "If several languages coalesce of the resulting.",
        },
        {
            date: "14 Mar",
            title: "Received to Insurance comapny",
            desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            date: "16 Mar",
            title: "Reviewing",
            desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            date: "19 Mar",
            title: "Document Analysis",
            desc: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
            date: "22 Mar",
            title: "Decision Pending",
            desc: "Lorem Ipsum is simply dummy text of the printing",
        },

    ]
    const openModal = (name, title) => {
        setmodalOpen({ 'selectedModel': name, 'modaltitle': title })
        setmodal(!modal)
    }

    const customer = [
        {
            claimno: "25225",
            ClaimReason: "loreium impsum doler sit amet",
            dateofCliam: "5/6/2020",
            lossdate: "5/12/2020",
            currentstatus: "",
            lastupdatedon: "5/12/2020",
            // log: "",
            state: "Punjab",
            since: "5/12/2020",
            total: 124,

        },

    ];

    const columns = [
        { dataField: 'claimno', text: 'Claim No', sort: true },
        { dataField: 'ClaimReason', text: 'Claim reason' },
        { dataField: 'dateofCliam', text: 'Date of claim' },
        { dataField: 'lossdate', text: 'Loss date' },
        {
            dataField: 'currentstatus',
            text: 'Current status',
            formatter: statusFormatter,
        },
        { dataField: 'lastupdatedon', text: 'Last updated on' },
        // {
        //     dataField: 'log',
        //     text: 'Log ',
        //     formatter: logFormatter,
        //     headerAttrs: { width: 50 },
        //     attrs: { width: 50, class: "EditRow" }
        // },



    ];
    // function logFormatter(cell, row, rowIndex, formatExtraData) {
    //     return (
    //         < div style={{
    //             textAlign: "center",
    //             cursor: "pointer",
    //             lineHeight: "normal"
    //         }}>
    //             <button type="button" className="fs-3 btn btn-link btn-sm p-0 shadow-none">
    //                 <i className="bx bx-detail"></i>
    //             </button>
    //         </div>
    //     );
    // }

    function rankFormatter(cell, row, rowIndex, formatExtraData) {
        return (
            < div style={{
                textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal"
            }}>
                <button type="button" className="btn btn-success btn-sm">
                    <i className="fas fa-eye"></i>
                </button>
            </div>
        );
    }
    function statusFormatter(cell, row, rowIndex, formatExtraData) {
        return (
            < div style={{
                textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal"
            }}>
                <button type="button" className="fs-3 btn btn-link btn-sm p-0 shadow-none"
                    onClick={() => openModal("claimStatus", "Claim Status")} >
                    <i className="bx bx-info-circle"></i>
                </button>
            </div>
        );
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Claims | eOxegen </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Claims" />
                    <Card>
                        <CardBody>
                            <CardTitle>Check claim status </CardTitle>
                            <div className="mb-0">
                                <Input
                                    type="search"
                                    className="form-control"
                                    id=""
                                    placeholder="Enter Claim number"
                                />
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Row className="mb-3 row align-items-center">
                                <Col md={6}><CardTitle>List of claims made</CardTitle></Col>
                                {/* <Col md={6} className="text-end">   <button type="button" className="btn btn-success">
                                    Add new claims
                                </button></Col> */}
                            </Row>
                            <CardTitle>Search Filter </CardTitle>
                            <Row>
                                <Col md={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="">Customer name</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            placeholder="Customer name"
                                        />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="">Customer name</Label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            placeholder="Customer name"
                                        />
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

            <Modal
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
                        {modalOpen.selectedModel == "claimStatus" ?
                            <>
                                <SimpleBar style={{ maxHeight: "310px" }}>
                                    <ul className="verti-timeline list-unstyled">
                                        {notofications.map((notification, key) => (
                                            <li key={key} className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18" />
                                                </div>
                                                <div className="d-flex">
                                                    <div className="me-3">
                                                        <h5 className="font-size-14">
                                                            {notification.date}
                                                            <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                                                        </h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <strong>{notification.title}</strong>
                                                        <div>{notification.desc}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </SimpleBar>

                            </> : null}

                    </ModalBody>
                    {modalOpen.selectedModel == "claimStatus" ? null :
                        <ModalFooter>
                            <Button type="button" color="danger" onClick={() => { setmodal(!modal); }} >
                                Cancel
                            </Button>
                            {/* <Button type="button" color="success">Save</Button> */}
                        </ModalFooter>
                    }
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default Claims