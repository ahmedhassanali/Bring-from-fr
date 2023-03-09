
import {useState } from 'react';
import'../PopupButton.css'
import Login from './Login';

function LoginButton() {

    const [modalShow, setModalShow] = useState(false);
    return (
      <>
        <button className='popup-button' variant="outlined" onClick={() => setModalShow(true)}> Login</button>
        <Login show={modalShow} onHide={() => setModalShow(false)}/>
      </>
    );
      
}
  export default LoginButton;