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


const customer = [
    { PoliciesNo: "Pol12121", type: "Health", name: "Aditi", code: "554545", startDate: "5/12/2020", endDate: "5/12/2020", premium: "2400", sumInsured: "2400", view: ""},
    { PoliciesNo: "Pol12121", type: "Health", name: "Aditi", code: "554545", startDate: "5/12/2020", endDate: "5/12/2020", premium: "2400", sumInsured: "2400", view: ""},
    { PoliciesNo: "Pol12121", type: "Health", name: "Aditi", code: "554545", startDate: "5/12/2020", endDate: "5/12/2020", premium: "2400", sumInsured: "2400", view: ""},
    { PoliciesNo: "Pol12121", type: "Health", name: "Aditi", code: "554545", startDate: "5/12/2020", endDate: "5/12/2020", premium: "2400", sumInsured: "2400", view: ""},
    { PoliciesNo: "Pol12121", type: "Health", name: "Aditi", code: "554545", startDate: "5/12/2020", endDate: "5/12/2020", premium: "2400", sumInsured: "2400", view: ""},
];

const columns = [
    { dataField: 'PoliciesNo', text: 'Policies Number', sort: true },
    { dataField: 'type', text: 'Policies type' },
    { dataField: 'name', text: 'Customer name' },
    { dataField: 'code', text: 'Customer code ' },
    { dataField: 'startDate', text: 'Policies start date' },
    { dataField: 'endDate', text: 'Policies end date' },
    { dataField: 'premium', text: 'Premium', },
    { dataField: 'sumInsured', text: 'Sum insured', },

    {
        dataField: 'view ',
        text: 'Download document',
        formatter: rankFormatter,
        headerAttrs: { width: 50 },
        attrs: { width: 50, class: "EditRow" }

    },

];
function rankFormatter(cell, row, rowIndex, formatExtraData) {
    return (
        < div
            style={{
                textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal"
            }}>
            <button type="button" className="fs-3 btn btn-link btn-sm p-0 shadow-none" >
                <i className="bx bx-download"></i>
            </button>
        </div>
    );
}

const Policies = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Policies | eOxegen </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Policies" />
                    <Card>
                        <CardBody>
                            <CardTitle>Search Filter </CardTitle>

                            <Row>
                                <Col md={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="">Policies  name</Label>
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
                                        <Label htmlFor="">Policies  name</Label>
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
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <Row className="mb-3 row align-items-center">
                                <Col md={6}><CardTitle>List of Policies sold</CardTitle></Col>

                            </Row>



                            <BootstrapTable keyField='id' data={customer} columns={columns} pagination={paginationFactory()} />
                        </CardBody>
                    </Card>

                </Container>

            </div>
        </React.Fragment>
    )
}

export default Policies