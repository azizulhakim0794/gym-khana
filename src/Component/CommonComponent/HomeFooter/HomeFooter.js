import React from 'react';
import './HomeFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const HomeFooter = () => {
    return (

        <div className="main-footer top-margin p-5">
            <div className="container">
                <div className="footer text-white">
                    <div className="row ">
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <p className="h4 ">POWER <span className="text-warning">X</span></p>
                        </div>
                        <div className="col-md-2 col-sm-3 col-6 mb-3">
                            <h5 className=""><u>Need help?</u></h5><br />
                            <p className="link">Help Center</p>
                            <p className="link">Email Support</p>
                            <p className="link">Live chat</p>
                            <p className="link">Gift Certificates</p>
                            <p className="link">Send Us Feedback</p>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-3">
                            <h5 className=""><u>Digital Resources</u></h5><br />
                            <p>Articles</p>
                            <p>E-book</p>

                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-3">
                            <h5 className=""><u>Connect With Us</u></h5><br />
                            <p className="h5">
                                <span className="ms-2 link"><FontAwesomeIcon icon={faFacebookSquare} /></span>
                                <span className="ms-2 link"><FontAwesomeIcon icon={faYoutube} /></span>
                                <span className="ms-2 link">  <FontAwesomeIcon icon={faInstagram} /></span>
                                <span className="ms-2 link"> <FontAwesomeIcon icon={faTwitter} /></span>
                                <span className="ms-2 link"> <FontAwesomeIcon icon={faWhatsapp} /></span>
                            </p>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <h5 className=""><u>Join Our Newsletter</u></h5><br />
                            <p className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae accusantium, dolore </p>
                        </div>
                    </div>
                    <div>
                    <br />
                    <br /><br />
                    <p className="text-center"><small>Copyright By Tamzid in {new Date().getFullYear()}</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeFooter;