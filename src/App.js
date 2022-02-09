import React from "react";
import {Row,Col,Button} from "react-bootstrap";
import FormCmp from "./components/FormCmp";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCmp from "./components/NavbarCmp";

function App() {
  return (
      <div className="container-fluid">
        <NavbarCmp/>
        <Row className="rows">
          <Col className="col-form border-top" md="5">
            <FormCmp />
          </Col>
          <Col className="img-col md-col" md="7">
            <span className="dot">.</span>
          </Col>
        </Row>
      </div>
  );
}

export default App;
