import React from "react";
import {Navbar,Button} from "react-bootstrap";

export default function NavbarCmp(){
    return(
        <Navbar bg="light" expand="lg">
          <div className="container-fluid container-nav">
            <Navbar.Brand href="#home"><h3 className="brand-name">ATools<span className="dotted">.</span></h3></Navbar.Brand>
            <div>
                <Navbar.Collapse id="basic-navbar-nav" className="collapse-nav">
                <div id="" className="me-auto nav-btns">
                    <Button className="nav-item btn-trial">Start Free Trial</Button>
                    <Button className="nav-item btn-login">Login</Button>
                </div>
                </Navbar.Collapse>
            </div>
          </div>
        </Navbar>
    );
};