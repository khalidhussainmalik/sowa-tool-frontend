import React from 'react';
import './Distributors.css';
import mitutoyo from './images/mitutoyo.png';
import Starrett from './images/Starrett.png';
import Seco from './images/Seco.png';
import GuehringDLogo from './images/GuehringDLogo.png';
import Gray_Tools from './images/Gray_Tools.png'

function Distributors() {
  return (
    <div className='container'>
    <h1>Authorized Distributors of</h1>
        <div className='image-container'>
            <img src={mitutoyo} alt=""/>
            <img src={Starrett} alt=""/>
            <img src={Seco} alt=""/>
            <img src={GuehringDLogo} alt=""/>
            <img src={Gray_Tools} alt=""/>
        </div>
    </div>
  )
}

export default Distributors