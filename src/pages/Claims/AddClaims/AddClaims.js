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
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table,
    CardTitle,
} from "reactstrap";
import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

const customer = [ 
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
    { name: "Aman", email: "aman@gmail.com", mobile: 99887766544, address: "building name ", city: "mohali", state: "Punjab", since: "5/12/2020", total: 124, },
]

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
                            <CardTitle>List of customer</CardTitle>

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
                            </div>
                        </CardBody>
                    </Card>

                </Container>

            </div>
        </React.Fragment>
    )
}

export default Customer