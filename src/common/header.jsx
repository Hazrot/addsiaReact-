import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink,Link} from "react-router-dom";

import Careers from "../component/careers";
import Websites from "../component/websites";
import Seo from "../component/seo";
import SocialMediaManagement from "../component/social_media_management";
import VideoCreative from "../component/video_&_creative";

import Home from "../component/home";
import Pricing from "../component/pricing";
import ProductDetails from "../component/productDetails";
import OnlineAdServices from "../component/online_ad_services";

import SignIn from "../component/userProfile/sign_in";
import SingUp from "../component/userProfile/sing_up";




class Header extends Component {
    render() {
        return (
            <Router>
            <div>
                {/*//  start page-loader*/}
                {/*<div class="page-loader">*/}
                {/*    <div class="page-loader-inner">*/}
                {/*        <div class="inner"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*//  end page-loader*/}
                {/*// header-area start -->*/}
                <header>
                    <div class="header-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-12 col-lg-6">
                                    <ul class="d-flex account_login-area">

                                    </ul>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12 col-lg-6">
                                    {/*//           sign_in sign_up        -->*/}

                                                        <div class="row">
                                                            <div class="col-lg-7 col-md-6">
                                                                <ul class="d-flex header-social">
                                                                    <li><a href="https://www.facebook.com/Adsiaa/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                                                                    <li><a href="https://www.instagram.com/adsiaa/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                                                    <li> <a href="https://www.linkedin.com/in/adsiaa-your-online-marketing-team-b786721b2/?originalSubdomain=bd" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                                                </ul>
                                                            </div>


                                                            <div class="col-lg-5 col-md-6">

                                                             <ul class="login-r">
                                                                <li data-toggle="modal" data-target="#sign_in"><Link to={"/signIn"}>Sign in</Link></li>&ndash;
                                                                <li data-toggle="modal" data-target="#sign_up"><Link to={"/signUp"}>Sign up</Link></li>
                                                              </ul>



                                                         </div>
                                             </div>





                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-area"  id="sticky-header">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-2 col-md-9 col-sm-9 col-9">
                                    <div class="logo">
                                        <NavLink to={"/"}><img src="assets/images/logo/AdsiaaLogoT-e1598464602900.png" alt="" /></NavLink>
                                    </div>
                                </div>
                                <div class="col-lg-10 d-none d-lg-block">
                                    <div class="main-menu">
                                        <nav class="nav_mobile_menu">
                                            <ul>
                                                <li><NavLink activeStyle={{fontWeight:"bold", color:"black"}} to={"/pricing"}>Pricing</NavLink>
                                                </li>
                                                <li><NavLink activeStyle={{fontWeight:"bold",color:"black"}} to={"/social_media_management"}>Social Media Management</NavLink></li>
                                                <li><NavLink activeStyle={{fontWeight:"bold",color:"black"}} to={"/video_&_creative"}>Video & Creative Services</NavLink>
                                                </li>
                                                <li><NavLink activeStyle={{fontWeight:"bold",color:"black"}} to={"/online_ad_services"}>Online Ad Services</NavLink>
                                                </li>
                                                <li><NavLink activeStyle={{fontWeight:"bold",color:"black"}} to={"/websites"}>Website</NavLink>
                                                </li>
                                                <li><NavLink activeStyle={{fontWeight:"bold",color:"black"}} to="/seo">SEO</NavLink></li>
                                                <li><NavLink activeStyle={{color:"black", fontWeight:"bold"}} to="/careers">Careers</NavLink></li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-12 d-block d-lg-none">
                                    <div className="mobile_menu"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <Switch>
                    <Route path={"/productDetails"} component={ProductDetails} />
                    <Route path={"/signUp"} component={SingUp} />
                    <Route path={"/signIn"} component={SignIn} />
                    <Route path={"/websites"} component={Websites} />
                    <Route path={"/online_ad_services"}  component={OnlineAdServices} />
                    <Route path={"/video_&_creative"} component={VideoCreative} />
                    <Route path={"/careers"}>
                        <Careers />
                    </Route>
                    <Route path="/social_media_management">
                        <SocialMediaManagement/>
                    </Route>
                    <Route path="/seo">
                        <Seo />
                    </Route>
                    <Route path="/pricing">
                        <Pricing />
                    </Route>
                    <Route exact path="/" component={Home}>

                    </Route>
                </Switch>


            </div>
            </Router>
        );
    }
}

export default Header;