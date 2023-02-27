import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import api from "../service";
// import axios from "axios";

import { API_URL } from "../constants";

class IHAForm extends React.Component {
  state = {
    ihaID: "",
    ihaName: "",
    ihaCommunicationRange: "",
    ihaHover: "",
    ihaLength: "",
    ihaWingSpan: "",
    ihaMaxSpeed: "",
    ihaMaxAltitude: "",
  };

  componentDidMount() {
    document.title = "İHA Ekle";
    if (this.props.iha) {
      const {
        ihaID,
        ihaName,
        ihaCommunicationRange,
        ihaHover,
        ihaLength,
        ihaWingSpan,
        ihaMaxSpeed,
        ihaMaxAltitude,
      } = this.props.iha;
      this.setState({
        ihaID,
        ihaName,
        ihaCommunicationRange,
        ihaHover,
        ihaLength,
        ihaWingSpan,
        ihaMaxSpeed,
        ihaMaxAltitude,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createIha = (e) => {
    e.preventDefault();
    console.log(this.state);
    api.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
    // axios.post(API_URL, this.state).then(() => {
    //   this.props.resetState();
    //   this.props.toggle();
    // });
  };

  editIha = (e) => {
    e.preventDefault();
    console.log(this.state.ihaName);
    api.put(API_URL + this.state.ihaID, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });

    // axios.put(API_URL + this.state.pk, this.state).then(() => {
    //   this.props.resetState();
    //   this.props.toggle();
    // });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.iha ? this.editIha : this.createIha}>
        {/* <FormGroup>
          <Label for="ihaID">İHA ID:</Label>
          <Input
            type="number"
            name="ihaID"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ihaID)}
          />
        </FormGroup> */}
        <FormGroup>
          <Label for="ihaName">İHA Adı:</Label>
          <Input
            type="text"
            name="ihaName"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ihaName)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ihaCommunicationRange">İHA İletişim Menzili:</Label>
          <Input
            type="text"
            name="ihaCommunicationRange"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ihaCommunicationRange)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ihaHover">İHA Havada Kalma Menzili:</Label>
          <Input
            type="text"
            name="ihaHover"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ihaHover)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ihaLength">İHA Uzunluğu:</Label>
          <Input
            type="text"
            name="ihaLength"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ihaLength)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ihaWingSpan">İHA Kanat Açıklığı:</Label>
          <Input
            type="text"
            name="ihaWingSpan"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ihaWingSpan)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ihaMaxSpeed">İHA Maksimum Hızı:</Label>
          <Input
            type="text"
            name="ihaMaxSpeed"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ihaMaxSpeed)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ihaMaxAltitude">İHA Maksimum Yüksekliği:</Label>
          <Input
            type="text"
            name="ihaMaxAltitude"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.ihaMaxAltitude)}
          />
        </FormGroup>

        <Button>{this.props.iha ? "Güncelle" : "Oluştur"}</Button>
      </Form>
    );
  }
}

export default IHAForm;
