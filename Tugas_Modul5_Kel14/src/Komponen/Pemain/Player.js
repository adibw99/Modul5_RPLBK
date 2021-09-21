import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useState, useContext, createContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';

const Tombol = styled.button`
  background: #5b5b5b;
  border-radius: 5px;
  border: none;
  color: black;
  margin: 16px;
  font-size: 18px;
  &:hover {
    border: solid 2px #008b8b;
    cursor: pointer;
  }
`;

export default class pemain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pemain: [],
      visible: false,
      nama: '',
      tim: '',
      kebangsaan: '',
      detail: '',
    };
  }

  handleNama = (e) => {
    this.setState({
      nama: e.target.value,
    });
    console.log(this.state.nama);
  };
  handleTim = (e) => {
    this.setState({
      tim: e.target.value,
    });
    console.log(this.state.tim);
  };
  handleKebangsaan = (e) => {
    this.setState({
      kebangsaan: e.target.value,
    });
    console.log(this.state.kebangsaan);
  };
  handleDetail = (e) => {
    this.setState({
      detail: e.target.value,
    });
    console.log(this.state.detail);
  };

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3000/dataPemain',
      // json-server --watch dataPemain.json
      headers: {
        accept: '*/*',
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          pemain: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.pemain.map((results, index) => {
          return (
            <div className="card mb-2 " key={results._id}>
              <div className="card-body">
                <h5 className="card-title">Nama : {results.nama}</h5>
                <h5 className="card-subtitle mb-2 text-muted">Tim : {results.tim}</h5>
                <h5 className="card-text text-black">Kebangsaan : {results.kebangsaan}</h5>
              </div>
              <Player nama={results.nama} tim={results.tim} kebangsaan={results.kebangsaan} detail={results.detail} />;
            </div>
          );
        })}
      </div>
    );
  }
}

function Player(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { nama, tim, kebangsaan, detail } = props;

  var userDetailContext = createContext(null);

  return (
    <>
      <userDetailContext.Provider>
        <Button variant="primary" onClick={handleShow}>
          Detail
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{nama}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Club : {tim}</p>
            <p>Negara : {kebangsaan}</p>
            <p>
              Tentang : <br /> {detail}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </userDetailContext.Provider>
    </>
  );
}
