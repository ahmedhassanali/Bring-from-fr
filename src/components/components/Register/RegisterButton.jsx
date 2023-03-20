


import {useState } from 'react';
import'../PopupButton.css'
import Register from './Register';
import React from 'react'

function RegisterButton() {

    const [modalShow, setModalShow] = useState(false);
    return (
      <>
        <button className='popup-button' variant="outlined" onClick={() => setModalShow(true)}> Register</button>
        <Register show={modalShow} onHide={() => setModalShow(false)}/>
      </>
    );
      
}
  export default RegisterButton;