import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>

                    <div className="footer-top bg-dark text-light ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 footer-about wow fadeInUp animated"
                                     style={{visibility: "visible", animationName: "fadeInUp"}}>
                                    <img className="logo-footer" src="assets/images/logo/footerlogo.png"
                                         alt="logo-footer" data-at2x="assets/img/logo.png" />
                                        <h4>Office</h4>
                                        <p className="footer-article">
                                            We work worldwide, however we operate from Sylhet, Bangladesh
                                        </p>
                                        <p><a href="#team">Our Team</a></p>
                                </div>
                                <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown animated"
                                     style={{visibility:" visible", animationName: "fadeInDown"}}>
                                    <h3>Contact</h3>
                                    <p><i className="fas fa-map-marker-alt"></i> Sylhet, Bangladesh</p>
                                    <p><i className="fas fa-phone"></i> Phone: (+880) 1765768076 </p>
                                    <p><i className="fas fa-envelope"></i> Email: <a
                                        href="mailto:hello@domain.com">info@adsiaa.com</a></p>
                                    <p><i className="fab fa-skype"></i> Skype: you_online</p>
                                </div>
                                <div className="col-md-4 col-lg-3 footer-social wow fadeInUp animated"
                                     style={{visibility: "visible", animationName: "fadeInUp"}}>
                                    <h3>Follow us</h3>
                                    <p>
                                        <a href="https://www.facebook.com/Adsiaa/" target="_blank"><i
                                            className="fab fa-facebook"></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="https://www.instagram.com/adsiaa/" target="_blank"><i
                                            className="fab fa-instagram"></i></a>
                                        <a href="https://www.linkedin.com/in/adsiaa-your-online-marketing-team-b786721b2/?originalSubdomain=bd"
                                           target="_blank"><i className="fab fa-linkedin"></i></a>
                                        <a href="https://www.youtube.com/channel/UCuncpot_RflGxAYUjCe7_fg"
                                           target="_blank"><i className="fab fa-youtube"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </footer>
            </div>
        );
    }
}

export default Footer;