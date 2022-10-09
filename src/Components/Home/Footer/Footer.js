import React from 'react';
import "../../Css/Footer.css";
import logo from "../../../images/Logo.jpg";
import Grid from '@material-ui/core/Grid';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


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
                        <li>
                            <a href="www.facebook.com">
                            {/* <AccessAlarm color="secondary" /> */}
                            </a>
                        </li>
                        {/* <li><a href="www.facebook.com"><ThreeDRotation /></a></li> */}
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