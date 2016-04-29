import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Paper } from 'material-ui';

import CardsWrapper from './cards-wrapper';
import DashboardCard from './dashboard-card';

import {} from './style.scss';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Grid className="custom-color" fluid={true}>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <DashboardCard title={"Total Sales"} value={"8,904,940.00"} className="col-lg-3 col-md-4 col-sm-6 col-xs-12" />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <DashboardCard title={"Total Sales"} value={"8,904,940.00"} className="col-lg-3 col-md-4 col-sm-6 col-xs-12" />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <DashboardCard title={"Total Sales"} value={"8,904,940.00"} className="col-lg-3 col-md-4 col-sm-6 col-xs-12" />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Dashboard;
