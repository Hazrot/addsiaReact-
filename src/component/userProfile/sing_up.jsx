import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink,Link} from "react-router-dom";

class SingUp extends Component {
    render() {
        return (
            <div className={"bodys"}>
                <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <div className="card card0 border-0">
                        <div className="row d-flex">
                            <div className="col-lg-6 lcol">
                                <div className="card1 pb-5">
                                    <div className="row pt-5"></div>
                                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line" ><img style={{height:"450px"}}
                                        src="assets/images/sign_in/uNGdWHi.png_" className="image" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card2 card border-0 px-4 py-5">
                                    <div className="row mb-4 px-3">
                                        <h6 className="mb-0 mr-4 mt-2" style={{ fontSize:"25px"}}>Sign Up</h6>


                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div className="line"></div>
                                        {/*<small className="or text-center">Or</small>*/}
                                        <div className="line"></div>
                                    </div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Name</h6>
                                        </label>
                                        <input className="mb-4" type="text" name="name"
                                               placeholder="Enter a valid email address" /></div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Email Address</h6>
                                        </label>
                                        <input className="mb-4" type="text" name="email"
                                               placeholder="Enter a valid email address" /></div>
                                    <div className="row px-3"><label className="mb-1">
                                        <h6 className="mb-0 text-sm">Password</h6>
                                    </label> <input className={"mb-4"} type="password" name="password" placeholder="Enter password" /></div>
                                    <div className="row px-3"><label className="mb-1">
                                        <h6 className="mb-0 text-sm">Confirm Password</h6>
                                    </label> <input className={"mb-1"} type="password" name="confirmPassword" placeholder="Enter confirm password" /></div>
                                    <div className="row px-3 mb-4">
                                        <div className="custom-control custom-checkbox custom-control-inline"><input
                                            id="chk1" type="checkbox" name="chk" className="custom-control-input" />
                                            <label htmlFor="chk1" className="custom-control-label text-sm"> I agree to Adsiaa <u> Terms</u> and <u>Privacy Policy</u></label></div>

                                    </div>
                                    <div className="row mb-3 px-3">
                                        <button type="submit" className="btn btn-blue text-center">Get started now</button>
                                    </div>
                                    <div className="row mb-4 px-3"><small className="font-weight-bold">Existing user?
                                        <Link to={"/signIn"} className="text-danger "> Sign in</Link></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        );
    }
}

export default SingUp;