import React from "react";
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const CardUser = props => {
  const { options, series } = props;
  return (
    <React.Fragment>

      <div className="d-flex flex-wrap">
        <h5 className="card-title me-2">Month wise analytics on consumer acquisition</h5>
        <div className="ms-auto">
          <div className="toolbar d-flex flex-wrap gap-2 text-end">
            <button type="button" className="btn btn-light btn-sm">
              ALL
            </button>{" "}
            <button type="button" className="btn btn-light btn-sm">
              1M
            </button>{" "}
            <button type="button" className="btn btn-light btn-sm">
              6M
            </button>{" "}
            <button type="button" className="btn btn-light btn-sm active">
              1Y
            </button>{" "}
          </div>
        </div>
      </div>

      <Row className="text-center">
        <Col lg={4}>
          <div className="mt-4">
            <p className="text-muted mb-1">Today</p>
            <h5>1024</h5>
          </div>
        </Col>

        <Col lg={4}>
          <div className="mt-4">
            <p className="text-muted mb-1">This Month</p>
            <h5>
              12356{" "}
              <span className="text-success font-size-13">
                0.2 % <i className="mdi mdi-arrow-up ms-1"></i>
              </span>
            </h5>
          </div>
        </Col>

        <Col lg={4}>
          <div className="mt-4">
            <p className="text-muted mb-1">This Year</p>
            <h5>
              102354{" "}
              <span className="text-success font-size-13">
                0.1 % <i className="mdi mdi-arrow-up ms-1"></i>
              </span>
            </h5>
          </div>
        </Col>
      </Row>

      <hr className="mb-4" />
      <div id="area-chart" dir="ltr">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={320}
          className="apex-charts"
        />
      </div>

    </React.Fragment>
  );
};

CardUser.propTypes = {
  options: PropTypes.any,
  series: PropTypes.any
};

export default CardUser;
