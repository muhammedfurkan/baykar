import React, { Component } from "react";
import { Table } from "reactstrap";
import NewIhaModal from "./NewIhaModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";


class IHAList extends Component {
  render() {
    const iha = this.props.iha;
    return (
      <Table bordered
      hover
      responsive
      striped>
        <thead>
          <tr>
            {/* <th>İHA ID</th> */}
            <th>İHA Adı</th>
            <th>İHA Haberleşme Menzili</th>
            <th>İHA Havada Kalma Süresi</th>
            <th>İHA Uzunluğu</th>
            <th>İHA Kanat Açıklığı</th>
            <th>İHA Maksimum Hızı</th>
            <th>İHA Maksimum Yüksekliği</th>
          </tr>
        </thead>
        <tbody>
          {!iha || iha.length <= 0 ? (
            <tr>
                <td colSpan="6" align="center">
                    <b>Henüz İHA Eklenmemiş</b>
                    </td>
                    </tr>
                    ) : (
                        iha.map(iha => (
                            <tr key={iha.pk}>
                                {/* <td>{iha.ihaID}</td> */}
                                <td>{iha.ihaName}</td>
                                <td>{iha.ihaCommunicationRange}</td>
                                <td>{iha.ihaHover}</td>
                                <td>{iha.ihaLength}</td>
                                <td>{iha.ihaWingSpan}</td>
                                <td>{iha.ihaMaxSpeed}</td>
                                <td>{iha.ihaMaxAltitude}</td>
                                <td align="center">
                                    <NewIhaModal
                                        create={false}
                                        iha={iha}
                                        resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                    <ConfirmRemovalModal
                                        pk={iha.pk}
                                        resetState={this.props.resetState}
                                    />
                                </td>
                            </tr>
                        ))
                    )}

        </tbody>
      </Table>
    );
  }
}

export default IHAList;