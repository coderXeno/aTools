import {Row,Col,Form,Button} from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

export default function FormCmp(){

    const [data,setData] = useState({
      email: "",
      password: ""
    });

    function handleEmailChange(event){
      setData({
        ...data,
        email: event.target.value
      })
    }

    function handlePasswordChange(event){
      setData({
        ...data,
        password: event.target.value
      })
    }

    function handleFormSubmit(event){
      event.preventDefault();
      const userData = {
        email: data.email,
        password: data.password
      };

      axios.post("https://reqres.in/api/login",userData)
        .then((response)=>{
          console.log(response.status)
          console.log(response.data.token);
          alert("Login Successful. Your token is: "+response.data.token)
        })
        .catch((err)=>{
          if(userData.password===""){
            alert("Missing password");
          } else if(userData.email===""){
            alert("Missing email");
          } else if(err.response){
            alert("User does not exist");
          } else {
            console.log(err);
          }
        });
    }

    return(
        <Form className="form" onSubmit={handleFormSubmit}>
                <Row className="form-title">
                  <Col><h3 className="font-weight-bold heading text-center">Welcome Back</h3></Col>
                </Row>
                <Row>
                  <Col><p className="text-center sub-title">Sub-title text goes here</p></Col>
                </Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn btn-primary btn-login-n sm-devices">
                Login
              </Button>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Row>
                  <Col><Form.Check type="checkbox" label="Remember Me" className="font-weight-bold"/></Col>
                  <Col><a href="#" className="forgot-link sm-devices font-weight-bold">Forgot Password?</a></Col>
                </Row>
              </Form.Group>
        </Form>
    );
};