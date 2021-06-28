import React, {Component} from 'react';
import '../page_css/video_creatibe_services.css';

class VideoCreative extends Component {
    render() {
        return (
            <div>

                {/*// <!--body part-->*/}

                <div class="container body content">
                    <div class="row">
                        <div class="col-md-6 ">
                            <img class="w-75  rounded" src="assets/images/video_&_creative/1.jpg" alt="" />
                        </div>
                        <div class="col-md-6">
                            <h2>Video & Creative Services</h2>
                            <br /><br /><br />
                                <h1 class="font-weight-bold">Marketing Video & Graphics To Grow Your Business</h1><br />
                                <img class="w-100" src="assets/images/video_&_creative/2.png" alt="" />
                                    <h2>ANIMATED VIDEO ADS</h2><br />
                                    <p>Animated commercials & animated video ads are an affordable way to grow your business online.</p><br />
                                    <img class="w-100" src="assets/images/video_&_creative/3.jpg" alt="" />
                                        <h2>LIVE ACTION VIDEO ADS</h2>
                                        <br /><br />
                                            <p>People can sometimes relate more to live-action videos, as they communicate emotions quickly. This is because of our ability to read body language.

                                            </p>
                                            <img class="w-100" src="assets/images/video_&_creative/4.jpg" alt="" />
                                                <h2>INTERVIEW VIDEOS</h2><br />
                                                <p>An interview with the business owner, with satisfied customers or friendly employees is a powerful way to tell the story of a business.
                                                </p>
                                                <img class="w-100" src="assets/images/video_&_creative/5.jpg" alt="" />
                                                    <h2>TESTIMONIAL VIDEOS</h2><br />
                                                    <p class="pb-5">Customer testimonials are videos that show your client talking about the experience of working with your company. </p>
                                                    <button class="btn-lg btn-danger p-3">Make Video Now</button>


                        </div>
                    </div>
                </div>

                {/*// <!--body part end-->*/}

            </div>
        );
    }
}

export default VideoCreative;