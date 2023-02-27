import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import IHAList from "./IHALists";
import NewIhaModal from "./NewIhaModal";
import api from "../service";
// import axios from "axios";

import { API_URL } from "../constants";
import Header from "./Header";

class Home extends Component {
  state = {
    ihas: []
  };

  componentDidMount() {
    document.title = "İHA Listesi";
    this.resetState();
  }

  getSIhas = () => {
    // axios.get(API_URL).then(res => this.setState({ ihas: res.data }));
    api.get(API_URL).then(res => this.setState({ ihas: res.data }));
  };

  resetState = () => {
    this.getSIhas();
  };

  render() {
    return (
      <>
      <Header/>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <IHAList
              iha={this.state.ihas}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewIhaModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Home;