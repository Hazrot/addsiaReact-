import React, {Component} from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                {/*// <!--body part start-->*/}
                <div class="container" >
                    {/*// <!--       top content -->*/}
                    <div class="top_content p-4 text-center ">
                        <p class="wow animate__backInDown">We are a creative marketing and advertising team</p>
                        <h1 class="wow animate__fadeInLeft display-4"><b>ADSiaa, Your Online</b> </h1>
                        <h1 class="wow animate__fadeInRight display-4"><b>Marketing Team</b></h1>
                    </div>

                    {/*// <!--        top content end-->*/}

                    {/*// <!--        element section-->*/}

                    <div class="element_section_one pt-5 mt-5 ml-5  ">

                        <div class="row pt-5">
                            <div class="wow animate__fadeInLeft col-md-6">
                                <h1 class="pb-4" >ADSiaa Easy Marketing APP (Coming Soon)</h1>
                                <span><p>Now Marketing At Your Fingertip !</p>
                    <p>Everything From Content  To Digital Marketing, Even Your TVC, You Can Do Everything With This App </p></span>
                                <ul class="pt-4">
                                    <li><p><i class="fas fa-check"></i>	&nbsp;  Easy to Access And Maintain All Your Marketing Needs</p></li>
                                    <li><p><i class="fas fa-check"></i>	&nbsp; Can Maintain Facebook And instagram ADS (PAY IN TAKA)</p></li>
                                </ul>
                            </div>
                            <div class="wow animate__fadeInRight col-md-6 ">
                                <img class="rounded w-100" src="assets/images/gallery/119708600_354310522602014_1763465998767165675_o-768x576.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                    {/*// <!--            Element section end-->*/}

                    {/*// <!--            section image-->*/}
                    <div class="wow animate__zoomIn animate__delay-2s section_img mt-5">
                        <img  class="rounded" src="assets/images/gallery/creative.jpg" alt="" style={{width: "100%", height: "500px"}} />
                    </div>
                    {/*// <!--            section image end-->*/}

                    {/*// <!--            Article Section-->*/}
                    <div class="article_section pb-5 ">
                        <div class="row">
                            <div class="wow animate__zoomIn animate__delay-4s col-md-4">
                                <p>&#9472;&#9472;&#9472;&nbsp;&nbsp;What We Do</p>
                                <h1 class="pt-4">We promote your business.</h1>
                            </div>
                        </div>
                        <div class="row p-4 text-justify article ">
                            <div class="wow animate__fadeInLeft  col-md-6">
                                <p><b>We are not a traditional marketing company or PR firm. We do not focus on print marketing or traditional media opportunities. The ADSiaa team is fixated on the power of web marketing and the results it generates for individuals and businesses. We dedicate ourselves to providing the best web design, the best web development, the best SEO strategies, Creative content, design logos, build websites, create videos, develop marketing strategies and the best PPC campaigns. </b></p>
                            </div>
                            <div class="wow animate__fadeInRight col-md-6">
                                <p><b>Our team is capable of supporting email marketing, social media, and mobile engagement. Our agency has serviced over 100 clients over a 2 Month period. We have a 98% client retention rate and a 99% client satisfaction rate. Our customers earn a combined BDT10,000,00 in revenue each month through online sales. They receive nearly 100000 visits each month through their websites.&nbsp;</b></p>
                            </div>
                        </div>

                    </div>

                </div>


                {/*// <!--top content end-->*/}



                {/*// <!--elementor Section-->*/}
                <div class="elementor_section pt-4 jumbotron ">
                    <div class="container">
                        <div class="row ">
                            <div class="col-md-4">
                                <div class="padding"><img  src="assets/images/post/sketch-1.png" alt="" />
                                </div>
                                <h1>Brand Builders & Storytellers.</h1>
                                <p>We write content, design logos, build websites, create videos, develop marketing strategies and more for companies big and small, across industries as diverse as luxury, lifestyle, beauty, music, science and finance, and throughout Bangladesh</p>
                                <br />
                                    <a href="">More Details</a>
                            </div>
                            <div class="col-md-4">
                                <img src="assets/images/post/3d-cube-2.png" alt="" />
                                    <h1>Social Media Marketing</h1>
                                    <p><span style={{fontWeight:" 400"}}>“Social media” is such an overused term these days that it’s hard to know exactly what it means. And everyone is either an expert or a neophyte. But social media is not scary, and it’s actually not all that difficult if you work with the right people.</span></p>
                                    <p><span style={{fontWeight:" 400"}}>And by right people, we mean those who can find, connect, and retain meaningful relationships that equate to brand and revenue growth. ADSiaa has the right people for the job. In fact, it’s part of our company DNA. We’ve helped numerous brands find their voice in online communication and thus expand their customer base and earnings. And by the end of our campaign, you and your staff will so adept at social media that you won’t need us anymore.&nbsp;</span></p>
                                    <br />
                                        <a href="">More Details</a>
                            </div>
                            <div class="col-md-4">
                                <div class="padding"> <img src="assets/images/post/startup-3.png" alt="" />
                                </div>
                                <h1>SEO</h1>
                                <p>We have the track record to prove it. No matter what marketing goals you have for your company, ADSiaa can help increase your bottom line with an SEO campaign that is specifically designed for your unique business. Start earning more qualified search traffic to your website today with our search engine optimization services.</p>
                                <br />
                                    <a href="">More Details</a>
                            </div>


                        </div>
                    </div>
                </div>
                {/*// <!--element section end-->*/}


                {/*// <!--our Team part-->*/}
                {/*// <!--All the designs in this part are in our_team.css without <p>&<h1>-->*/}
                <div class="team-area" id={"team"}>
                    <div class="container">
                        <p>&#9472;&#9472;&#9472;&nbsp;&nbsp; We are ADSiaa. Your online Marketing Team</p><br />
                        <h1 class="p-5">Our Team</h1>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div class="single-team">
                                    <div class="img-area">
                                        <img src="assets/images/team/1.jpg" class="img-responsive" alt="" />
                                            <div class="social">
                                                <ul class="list-inline">
                                                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                                                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href=""><i class="fab fa-pinterest"></i></a></li>
                                                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    <div class="img-text">
                                        <h4>Sumon Rahman</h4>
                                        <h5>CEO And Motion Designer</h5>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div class="single-team">
                                    <div class="img-area">
                                        <img src="assets/images/team/2.S.I_Farhad.jpg" class="img-responsive" alt="" />
                                            <div class="social">
                                                <ul class="list-inline">
                                                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                                                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href=""><i class="fab fa-pinterest"></i></a></li>
                                                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    <div class="img-text">
                                        <h4>S.I Farhad</h4>
                                        <h5>Coo And Creative Director</h5>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div class="single-team">
                                    <div class="img-area">
                                        <img src="assets/images/team/3.Tasnim.jpg" class="img-responsive" alt="" />
                                            <div class="social">
                                                <ul class="list-inline">
                                                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                                                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href=""><i class="fab fa-pinterest"></i></a></li>
                                                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    <div class="img-text">
                                        <h4>Tasnim Tajin</h4>
                                        <h5>Content Writer</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div class="single-team">
                                    <div class="img-area">
                                        <img src="assets/images/team/4.Razib_Hassan.jpg" alt="" />
                                            <div class="social">
                                                <ul class="list-inline">
                                                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                                                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href=""><i class="fab fa-pinterest"></i></a></li>
                                                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    <div class="img-text">
                                        <h4>Razib Hassan</h4>
                                        <h5>Graphic Designer</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div class="single-team">
                                    <div class="img-area">
                                        <img src="assets/images/team/5.Mahfuzur_Rahman_Chowdhury.jpg" alt="" />
                                            <div class="social">
                                                <ul class="list-inline">
                                                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                                                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href=""><i class="fab fa-pinterest"></i></a></li>
                                                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    <div class="img-text">
                                        <h6>Mahfuzur Rahman Chowdhury</h6>
                                        <h5>Communications Manager</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div class="single-team">
                                    <div class="img-area">
                                        <img src="assets/images/team/6.Shakir.jpg" alt="" />
                                            <div className="social">
                                                <ul class="list-inline">
                                                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                                                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href=""><i class="fab fa-pinterest"></i></a></li>
                                                    <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    <div className="img-text">
                                        <h4>Shakir</h4>
                                        <h5>Web Designer</h5>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
                {/*// <!--our team part end-->*/}

                {/*// <!--Contacts part-->*/}
                <div className="contacts-part">
                    <div className="container text-center">
                        <h1 className="display-4"> Contacts</h1>
                        <p>We design and build unique things</p>
                    </div>
                </div>
                {/*// <!--Contacts part end-->*/}

                {/*// <!--follow us part-->*/}
                <div className="follow-us jumbotron">
                    <div className="container">
                        <p>Follow Us</p>
                        <ul className="list-inline">
                            <li className="list-inline-item h4 "><a href="https://www.instagram.com/adsiaa/" className="text-dark font-weight-bold font-italic" target="_blank">Instagram</a></li>
                            <li className="list-inline-item pl-4 h4" ><a href="https://www.facebook.com/Adsiaa/"  className="text-dark font-weight-bold font-italic " target="_blank">Facebook</a></li>
                            <li className="list-inline-item pl-4 h4"><a href="https://www.instagram.com/adsiaa/" className="text-dark font-weight-bold font-italic" target="_blank">LinkedIn</a></li>
                        </ul>
                        <h1 className="pt-4">Let's Work Together</h1>
                        <h5 className="font-italic">info@adsiaa.com or Call: 01765768076</h5>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;