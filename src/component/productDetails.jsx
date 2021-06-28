import React, {Component} from 'react';
import '../page_css/productdetails.css';

class ProductDetails extends Component {
    render() {
        return (
            <div>
                {/*// <!--body part-->*/}
                {/*// <!-- single-product-area start-->*/}
                <div class="single-product-area section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="product-single-img">
                                    <div class="product-active owl-carousel">
                                        <div class="item">
                                            <img src="assets/images/product/1.My-Post-28-300x300-1.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/2.My-Post-38-300x300.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/3.My-Post-39-300x300.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/4.My-Post-40-300x300.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/5.My-Post-37-300x300.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/5.My-Post-37-300x300.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="product-thumbnil-active  owl-carousel">
                                        <div class="item">
                                            <img src="assets/images/product/1.My-Post-28-300x300-1.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/2.My-Post-38-300x300.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/3.My-Post-39-300x300.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/4.My-Post-40-300x300.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/5.My-Post-37-300x300.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="assets/images/product/6.My-Post-41-300x300.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-single-content">
                                    <h3>1.0 Dekho Shuno (Video Ads)</h3>
                                    <div class="rating-wrap fix">
                        <span class="pull-left">   <ul>
                                <li><del>৳ 3,000 </del></li>
                                <li>৳ 2,000</li>
                            </ul></span>
                                        <ul class="rating pull-right">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li>(05 Customar Review)</li>
                                        </ul>
                                    </div>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs</p>
                                    <ul class="input-style">
                                        <li class="quantity cart-plus-minus">
                                            <input type="text" value="1" />
                                        </li>
                                        <li><a href="cart.html">Add to Cart</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-60">
                            <div class="col-12">
                                <div class="single-product-menu">
                                    <ul class="nav">
                                        <li><a class="active" data-toggle="tab" href="#description">Description</a> </li>
                                        <li><a data-toggle="tab" href="#tag">Faq</a></li>
                                        <li><a data-toggle="tab" href="#review">Review</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="description">
                                        <div class="description-wrap">
                                            <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. </p>
                                            <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. </p>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tag">
                                        <div class="faq-wrap" id="accordion">
                                            <div class="card">
                                                <div class="card-header" id="headingOne">
                                                    <h5><button data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">General Inquiries ?</button> </h5>
                                                </div>
                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="headingTwo">
                                                    <h5><button class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How To Use ?</button></h5>
                                                </div>
                                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="headingThree">
                                                    <h5><button class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Shipping & Delivery ?</button></h5>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="headingfour">
                                                    <h5><button class="collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">Additional Information ?</button></h5>
                                                </div>
                                                <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="headingfive">
                                                    <h5><button class="collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">Return Policy ?</button></h5>
                                                </div>
                                                <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="review">
                                        <div class="review-wrap">
                                            <ul>
                                                <li class="review-items">
                                                    <div class="review-img">
                                                        <img src="assets/images/comment/1.png" alt="" />
                                                    </div>
                                                    <div class="review-content">
                                                        <h3><a href="#">GERALD BARNES</a></h3>
                                                        <span>27 Jun, 2019 at 2:30pm</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at estei to bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                                                        <ul class="rating">
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="review-items review-items2">
                                                    <div class="review-img">
                                                        <img src="assets/images/comment/2.png" alt="" />
                                                    </div>
                                                    <div class="review-content">
                                                        <h3><a href="#">Olive Oil</a></h3>
                                                        <span>15 may, 2019 at 2:30pm</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at estei to bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                                                        <ul class="rating">
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star-half-o"></i></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="review-items">
                                                    <div class="review-img">
                                                        <img src="assets/images/comment/3.png" alt="" />
                                                    </div>
                                                    <div class="review-content">
                                                        <h3><a href="#">Nature Honey</a></h3>
                                                        <span>14 janu, 2019 at 2:30pm</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at estei to bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                                                        <ul class="rating">
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star-o"></i></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="add-review">
                                            <h4>Add A Review</h4>
                                            <div class="ratting-wrap">
                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <th>task</th>
                                                        <th>1 Star</th>
                                                        <th>2 Star</th>
                                                        <th>3 Star</th>
                                                        <th>4 Star</th>
                                                        <th>5 Star</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Price</td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Value</td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Quality</td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                        <td>
                                                            <input type="radio" name="a" />
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 col-12">
                                                    <h4>Name:</h4>
                                                    <input type="text" placeholder="Your name here..." />
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h4>Email:</h4>
                                                    <input type="email" placeholder="Your Email here..." />
                                                </div>
                                                <div class="col-12">
                                                    <h4>Your Review:</h4>
                                                    <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Your review here..."></textarea>
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn-style">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- single-product-area end-->*/}


            </div>
        );
    }
}

export default ProductDetails;