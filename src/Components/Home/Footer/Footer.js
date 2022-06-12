import React from 'react';
import "../../Css/Footer.css";
import logo from "../../../images/Logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twitter, facebook, linkedin, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='section-footer'>
            <div className='container'>
                <h1>Footer Area</h1>                
                
                <div className='row'>
                    <div className='col-md-6'>
                        <img width={100} src={logo} alt="logo"/>

                        <ul>
                            <li><a href="www.facebook.com"><FontAwesomeIcon icon={faCoffee} /></a></li>
                            <li><a href="www.facebook.com"><FontAwesomeIcon icon={faCoffee} /></a></li>
                            <li><a href="www.facebook.com"><FontAwesomeIcon icon={faCoffee} /></a></li>
                        </ul>
                    </div>
                    <div className='col-md-6'>

                    </div>
                </div>


            </div>
            <div className='py-5 footer-bottom'>
                <p>Copyright &copy; 2022, All rights reserved Dhaka Ideal Citizen Madrasah</p>
            </div>
        </div>
    );
};

export default Footer;