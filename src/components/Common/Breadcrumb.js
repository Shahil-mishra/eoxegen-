import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Row, Col, BreadcrumbItem } from "reactstrap"

const Breadcrumb = props => {
  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-0 font-size-18">{props.breadcrumbItem}</h4>
          {props.hideBreadcrum ?
            null :
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <BreadcrumbItem>
                  <Link to="/dashboard"><i className="bx bxs-dashboard"></i></Link>
                </BreadcrumbItem>
                {props.child ? <BreadcrumbItem>
                  <Link to={props.titleLink}>{props.title}</Link>
                </BreadcrumbItem> : null}

                <BreadcrumbItem active>
                  <Link to="#">{props.breadcrumbItem}</Link>
                </BreadcrumbItem>
              </ol>
            </div>
          }
        </div>
      </Col>
    </Row>
  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
  titleLink: PropTypes.string,
  child: PropTypes.bool,
  hideBreadcrum: PropTypes.bool,
}

export default Breadcrumb
