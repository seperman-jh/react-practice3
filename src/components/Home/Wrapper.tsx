import React from "react";
import {mainProductData} from "../../resource/data/mainProductData.js";
import {MainProduct} from "./MainProduct";
import {Col, Container, Row} from "react-bootstrap";


function Wrapper () {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="main_bg" />
                    </Col>
                </Row>
                <Row>
                    <MainProduct
                        data = {mainProductData}
                    />
                </Row>
            </Container>
        </>
    )
}

export default Wrapper;