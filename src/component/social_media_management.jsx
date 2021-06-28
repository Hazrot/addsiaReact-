import React, {Component} from 'react';

class SocialMediaManagement extends Component {
    render() {
        return (
            <div>
                {/*// <!--body part start-->*/}
                <div class="section">
                    <div class="container body">
                        <div class="row">
                            <div class="col-md-6 order-2 order-md-1  article-part">
                                <h1 class="">Social Media Management</h1>
                                <p>Do you really need to network? Maybe not, but being visible keeps you top of mind. The online equivalent of networking is social media. We’ll make sure your presence is up to date</p>
                                <button class="btn-lg btn-danger p-3 ">Contact Us</button>
                            </div>
                            <div class="col-md-6 order-1 order-md-2  border-light ">
                                <img class="rounded w-100" src="assets/images/pricing/14.My-Post-33-300x300.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!--body part start end-->*/}

            </div>
        );
    }
}

export default SocialMediaManagement;