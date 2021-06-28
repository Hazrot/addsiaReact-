import React, {Component} from 'react';
import  '../page_css/pricing.css';
import {BrowserRouter as Router,Switch,Route,NavLink,Link} from "react-router-dom";

class Pricing extends Component {
    render() {
        return (
            <div>
                <div className="product-area section-padding">
                    <div className="container">
                        <div className="product-top">
                            <div className="pro-result">
                                <span>Showing 1–16 of 18 results</span>
                            </div>
                            <div className="pro-sorting">
                                <select name="orderby" className="orderby" aria-label="Shop order">
                                    <option value="menu_order" selected="selected">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by latest</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/1.My-Post-28-300x300-1.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link to={"/signIn"} className="theme-btn" href="#">Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>1.0 Dekho Shuno (Video Ads)</Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 3,000</del>
                                                </li>
                                                <li>৳ 2,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/2.My-Post-38-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link to={"/signIn"} className="theme-btn" >Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>1.1 Digital Banner (10 Unit)</Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 3,000</del>
                                                </li>
                                                <li>৳ 2,500</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/3.My-Post-39-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link to={"/signIn"} className="theme-btn">Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>1.2 SEO Local Plan</Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 25,000</del>
                                                </li>
                                                <li>৳ 18,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/4.My-Post-40-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>1.3 SEO National Plan (Month)</Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 45,000</del>
                                                </li>
                                                <li>৳ 35,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/5.My-Post-37-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"#"}>1.4 Premium Website (WordPress)</Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 45,000</del>
                                                </li>
                                                <li>৳ 39,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/6.My-Post-41-300x300.png" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>1.5 Social Media Manager (1 Month)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 9,600</del>
                                                </li>
                                                <li>৳ 8,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/5.My-Post-37-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>1.6 Social Media Manager (Month)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 9,000</del>
                                                </li>
                                                <li>৳ 8,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/8.My-Post-29-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>2.0 Dekho Shuno+ (Video Ads)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 4,000</del>
                                                </li>
                                                <li>৳ 3,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/9.My-Post-34-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>2.0 Social Media Starter
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del></del>
                                                </li>
                                                <li>৳ 5,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/10.My-Post-30-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>2.9 DEKHO (VIDEO ADS)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 1,500</del>
                                                </li>
                                                <li>৳ 1,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/11.My-Post-30-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>3.0 Dekho Bujho Shuno+ (Video Ads)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 6,000</del>
                                                </li>
                                                <li>৳ 5,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/12.My-Post-34-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>4.0 Facebook Boost (10$)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 950</del>
                                                </li>
                                                <li>৳ 880</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/13.My-Post-31-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>5.0 Social Media Manager (1 Month)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 12,000</del>
                                                </li>
                                                <li> ৳ 9,600</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/14.My-Post-33-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>6.0 Social Media Manager (6 Month)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 39,600</del>
                                                </li>
                                                <li>৳ 33,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img
                                                src="assets/images/pricing/15.wallpaper-mockup-featuring-a-working-space-desk-2704-el1-300x300.png"
                                                alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>6.5 TVC/OVC</Link></h2>
                                            <ul>
                                                <li>
                                                    <del></del>
                                                </li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/16.My-Post-32-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>7.0 Social Media Manager (1 Year)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 79,200</del>
                                                </li>
                                                <li> ৳ 60,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/17.My-Post-35-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>8.0 Basic Website (WordPress)
                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 15,000</del>
                                                </li>
                                                <li>৳ 12,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/pricing/17.My-Post-36-300x300.jpg" alt="" />
                                                <div className="cart-btn">
                                                    <Link className="theme-btn" to={"/signIn"}>Add to Cart <i
                                                        className="fa fa-arrow-right"></i></Link>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                            <h2><Link to={"/productDetails"}>9.0 Advanced Website (WordPress)

                                            </Link></h2>
                                            <ul>
                                                <li>
                                                    <del>৳ 30,000</del>
                                                </li>
                                                <li> ৳ 24,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="pagination-wrapper pagination-wrapper-2">
                                        <ul>
                                            <li><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a className="next" href="#">Next Page</a></li>
                                        </ul>
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

export default Pricing;