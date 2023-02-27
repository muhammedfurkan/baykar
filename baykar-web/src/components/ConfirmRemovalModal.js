import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import api from "../service";
// import axios from "axios";

// import { API_URL } from "../constants";

class ConfirmRemovalModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteIha = pk => {
    api.delete(`iha/${pk}`).then(() => {
        this.props.resetState();
        this.toggle();
    });
    // axios.delete(API_URL + pk).then(() => {
    //   this.props.resetState();
    //   this.toggle();
    // });
  };

  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
          Sil
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Gerçekten silmek istiyor musunuz?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              İptal
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteIha(this.props.pk)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;