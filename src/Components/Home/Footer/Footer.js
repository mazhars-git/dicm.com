import React from 'react';
import "../../Css/Footer.css";
import logo from "../../../images/Logo.jpg";
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twitter, faFacebook, linkedin, faCoffee, faCake, faMailBulk, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='section-footer'>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Footer Area</h1>
                </Grid>  
                
                <Grid item xs={12} sm={6}>
                    <img width={100} src={logo} alt="logo"/>

                    <ul>
                        <li><a href="www.facebook.com"><FontAwesomeIcon icon={faCake} /></a></li>
                        <li><a href="www.facebook.com"><FontAwesomeIcon icon={faMailBulk} /></a></li>
                    </ul>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Location</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Carrer</a></li>
                    </ul>
                </Grid>
            </Grid>
            <div className='py-5 footer-bottom'>
                <p>Copyright &copy; 2022, All rights reserved Dhaka Ideal Citizen Madrasah</p>
            </div>
        </div>
    );
};

export default Footer;