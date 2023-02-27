import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import IHAForm from "./IHAForm";


class NewIhaModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "İHA Düzenle";
    var button = <Button onClick={this.toggle}>Düzenle</Button>;
    if (create) {
      title = "Yeni İHA Ekle";

      button = (
        <Button
          color="primary"
          className="float-right"
          id="addIhaButton"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
            Yeni İHA Ekle
        </Button>
      );
    }
    

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <IHAForm
              iha={this.props.iha}
              resetState={this.props.resetState}
              toggle={this.toggle}
              student={this.props.student}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewIhaModal;