import React from "react";
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom";

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
    { name: "Anjali Saxena", email: "anjali@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 48, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Vishal Singh", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 50, },
];

const columns = [
    {
        dataField: 'name', text: 'Name', sort: true,
        formatter: rankFormatter,  
        attrs: {   className: "EditRow" }
    },
    { dataField: 'email', text: 'Email' },
    { dataField: 'mobile', text: 'Mobile' },
    { dataField: 'address', text: 'Address' },
    { dataField: 'city', text: 'City' },
    { dataField: 'state', text: 'State' },
    { dataField: 'since', text: 'Customer since', sort: true },
    { dataField: 'total', text: 'Total Policies', sort: true },
   

];
function rankFormatter(cell, row, rowIndex, formatExtraData ) {
    
    return (
      
        <div
            style={{
                textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal"
            }}>
            <Link to="/customer/view" className="btn btn-link  btn btn-link p-0">
            {row.name}
            </Link>

        </div>
    );
}

const Customer = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Customer | eOxegen </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Customer" />
                    <Card>
                        <CardBody>
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
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <Row className="mb-3 row align-items-center">
                                <Col md={6}><CardTitle>List of customer</CardTitle></Col>
                                <Col md={6} className="text-end">
                                    {/* <button type="button" className="btn btn-success">
                                        Add new customer
                                    </button> */}
                                </Col>
                            </Row>

                            {/* <div className="table-rep-plugin">
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
                                                <Th>Name</Th>
                                                <Th data-priority="1">Email</Th>
                                                <Th data-priority="3">Mobile</Th>
                                                <Th data-priority="1">Address</Th>
                                                <Th data-priority="3">City</Th>
                                                <Th data-priority="3">State </Th>
                                                <Th data-priority="6">Customer since </Th>
                                                <Th data-priority="7">Total Policies</Th>
                                                <Th data-priority="8">View </Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {customer.map((data, indx) => {
                                                return (

                                                    <Tr key={indx}>
                                                        <td>{data.name}</td>
                                                        <td>{data.email}</td>
                                                        <td>{data.mobile}</td>
                                                        <td>{data.address}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.state}</td>
                                                        <td>{data.since}</td>
                                                        <td>{data.total}</td>
                                                        <td> <button type="button" className="btn btn-success btn-sm">
                                                            <i className="fas fa-eye"></i>
                                                        </button></td>
                                                    </Tr>
                                                )
                                            })}

                                        </Tbody>
                                    </Table>
                                </div>
                            </div> */}

                            <BootstrapTable keyField='id' data={customer} columns={columns} pagination={paginationFactory()} />
                        </CardBody>
                    </Card>

                </Container>

            </div>
        </React.Fragment>
    )
}

export default Customer