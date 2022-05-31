import React from "react";
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
} from "reactstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


const TrackEndorsement = () => {

    const customer = [
        { name: "Anjali Saxena", relationship: "Spouse", contact: "99887766544", dob: "12 June 1980", },
        { name: "Rakesh Saxena", relationship: "Father", contact: "99887766544", dob: "12 June 1980", },
        { name: "Pooja Saxena", relationship: "Mother", contact: "99887766544", dob: "12 June 1980", },
    ];

    // /endorsement/track

    const columns = [
        { dataField: 'name', text: 'Name', sort: true, },
        { dataField: 'relationship', text: 'Relationship' },
        { dataField: 'dob', text: 'D.O.B' },
        { dataField: 'contact', text: 'Contact' },

    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Customer | eOxegen </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs child titleLink="/endorsement" title="Endorsement" breadcrumbItem="Track Endorsement" />
                    <Row>
                        <Col md={6}>
                            <Card>
                                <CardBody>
                                    <CardTitle>List of customer</CardTitle>

                                    <div className="row pt-1" >
                                        <div className="col mb-2">
                                            <label className="mb-0">Policies Holder Name</label>
                                            <div className="text-black-50">Rahul Saxena </div>
                                        </div>
                                        <div className="col mb-2">
                                            <label className="mb-0">Policies No.</label>
                                            <div className="text-black-50">E01356352657 </div>
                                        </div>
                                    </div>
                                    <div className="my-75 row">
                                        <div className="col mb-2">
                                            <label className="mb-0">Today date</label>
                                            <div className="text-black-50">30 February 2021 </div>
                                        </div>
                                        <div className="col mb-2">
                                            <label className="mb-0">Phone</label>
                                            <div className="text-black-50">+ 91 1236547890 </div>
                                        </div>
                                    </div>
                                    <div className="my-75 row">
                                        <div className="col mb-2">
                                            <label className="mb-0">Email</label>
                                            <div className="text-black-50">Rahul@gmail.com </div>
                                        </div>
                                        <div className="col mb-2">
                                            <label className="mb-0">Changes in Premium frequency</label>
                                            <div className="text-black-50">Monthly </div>
                                        </div>
                                    </div>
                                    <div className="my-75 row">
                                        <div className="col mb-2">
                                            <label className="mb-0">Changes in Nominee(Max 3)</label>
                                            <div className="text-black-50">02 </div>
                                        </div>
                                    </div>

                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Family Members</CardTitle>
                                    <div className="table-rep-plugin">
                                        <div className="table-responsive mb-0" data-pattern="priority-columns">
                                            <BootstrapTable keyField='id' data={customer} columns={columns} />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <CardBody>

                                    <ul className="timeline">
                                        <li className="timeline-item">
                                            <span className="timeline-point timeline-point-indicator"></span>
                                            <div className="timeline-event">
                                                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                                    <h6>Form Submitted</h6>
                                                    <span className="small">5 days ago</span>
                                                </div>
                                                <p className="">Lorem Ipsum is simply dummy text of the printing</p>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <span className="timeline-point timeline-point-indicator"></span>
                                            <div className="timeline-event">
                                                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                                    <h6>Received to Insurance comapny</h6>
                                                    <span className="small">4 days ago</span>
                                                </div>
                                                <p className="">Lorem Ipsum is simply dummy text of the printing</p>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <span className="timeline-point timeline-point-indicator"></span>
                                            <div className="timeline-event">
                                                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"><h6>Reviewing</h6><span className="small">3 days ago</span>
                                                </div>
                                                <p className="">Lorem Ipsum is simply dummy text of the printing</p>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <span className="timeline-point timeline-point-indicator"></span>
                                            <div className="timeline-event">
                                                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                                    <h6>Document Analysis</h6>
                                                    <span className="small">2 days ago</span>
                                                </div>
                                                <p className="">Lorem Ipsum is simply dummy text of the printing</p></div></li><li className="timeline-item"><span className="timeline-point timeline-point-indicator"></span>
                                            <div className="timeline-event">
                                                <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                                    <h6>Decision Pending</h6>
                                                    <span className="small">1 days ago</span>
                                                </div><p className="mb-0">Lorem Ipsum is simply dummy text of the printing</p>
                                            </div>
                                        </li>
                                    </ul>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default TrackEndorsement