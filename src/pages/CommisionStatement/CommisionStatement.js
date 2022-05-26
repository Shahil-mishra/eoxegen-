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
import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';



const CommisionStatement = () => {
    const [modal, setmodal] = useState(false);
    const [modalOpen, setmodalOpen] = useState({
        selectedModel: '',
        modaltitle: '',
    });


    const openModal = (name, title) => {
        setmodalOpen({ 'selectedModel': name, 'modaltitle': title })
        setmodal(!modal)
    }

    const customer = [
        {
            statementdate: "5/6/2020",
            statementperiod: "4 Months",
            commision: "5000 Rs",
            download: "",
        },
        {
            statementdate: "5/6/2020",
            statementperiod: "4 Months",
            commision: "5000 Rs",
            download: "",
        },
        {
            statementdate: "5/6/2020",
            statementperiod: "4 Months",
            commision: "5000 Rs",
            download: "",
        },
        {
            statementdate: "5/6/2020",
            statementperiod: "4 Months",
            commision: "5000 Rs",
            download: "",
        },

    ];

    const columns = [
        { dataField: 'statementdate', text: 'Date of statement', sort: true },
        { dataField: 'statementperiod', text: 'Period of statement' },
        { dataField: 'commision', text: 'Commision Amount' },

        {
            dataField: 'download',
            text: 'Download statement ',
            formatter: logFormatter,
            headerAttrs: { width: 50 },
            attrs: { width: 50, class: "EditRow" }
        },  
    ];
    function logFormatter(cell, row, rowIndex, formatExtraData) {
        return (
            < div style={{
                textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal"
            }}>
                <button type="button" className="fs-3 btn btn-link btn-sm p-0 shadow-none"
                    onClick={() => openModal("comissionStateMent", "Download commision statement")}
                >
                    <i className="bx bx-download"></i>
                </button>
            </div>
        );
    }


    const statementList = [
        {
            statementname: "statement 1",
            statementdate: "5/6/2020", 
            download: "",
        },
        {
            statementname: "statement 2",
            statementdate: "5/6/2020", 
            download: "",
        },
        {
            statementname: "statement 3",
            statementdate: "5/6/2020", 
            download: "",
        },
      
    ];

    const statementListColumns = [
        { dataField: 'statementname', text: 'Statement name', sort: true },
        { dataField: 'statementdate', text: 'Statement Date' },
         

        {
            dataField: 'download',
            text: 'Download ',
            formatter: downloadbtn,
            headerAttrs: { width: 50 },
            attrs: { width: 50, class: "EditRow" }
        },  
    ];
    function downloadbtn(cell, row, rowIndex, formatExtraData) {
        return (
            < div style={{
                textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal"
            }}>
                <button type="button" className="fs-3 btn btn-link btn-sm p-0 shadow-none">
                    <i className="bx bx-download"></i>
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
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Commision statement" />
                    <Card>
                        <CardBody>
                            <CardTitle>List of statements </CardTitle>

                            <div className="table-rep-plugin">
                                <div className="table-responsive mb-0" data-pattern="priority-columns">
                                <BootstrapTable keyField='id' data={customer} columns={columns} />
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
                        {modalOpen.selectedModel == "comissionStateMent" ?
                            <>
                                {/* <Row>
                                    <Col md={4}>
                                        <div className="downloadBox p-3">
                                            <div className="downloadBox__img">
                                                <i className="bx bxs-file-pdf"></i>
                                            </div>
                                            <div className="downloadBox__content">                                             
                                                <button type="button" className="btn btn-primary " >
                                                    <i className="bx bx-download font-size-16 align-middle me-2"></i> 
                                                    Download statement
                                                </button>
                                            </div>
                                        </div>
                                    </Col> 
                                </Row> */}

                                <div className="table-rep-plugin">
                                    <div className="table-responsive mb-0" data-pattern="priority-columns">
                                    
                                        <BootstrapTable keyField='id' data={statementList} columns={statementListColumns} />
                                    </div>
                                </div>

                            </> : null}


                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" color="danger" onClick={() => { setmodal(!modal); }} >
                            Cancel
                        </Button>
                        {/* <Button type="button" color="success">Save</Button> */}
                    </ModalFooter>
                </div>
            </Modal>


        </React.Fragment>
    )
}

export default CommisionStatement