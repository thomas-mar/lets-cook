import React from "react";

const NewsletterSubscribe = () => {

    //meal.strInstructions = meal.strInstructions.replaceAll('\n', '<br/><br/>');

    return (
        <>

            <div class="card bg-primary mb-5 newsletter-subscribe">
                <div class="row align-items-center">
                    <div class="col-6 p-5">
                        <h2>Subscribe To Our Newsletter</h2>
                        <p>Get the latest and freshest recipes emailed to you</p>
                        <div class="custom-input-group w-75 mt-4">
                            <input type="text" class="form-control" placeholder="Enter your email"/>
                            <button class="custom-input-button btn btn-secondary" type="submit">Subscribe</button>  
                        </div>
                    </div>
                    <div class="col-6 p-5 ps-0">
                        <img class="w-100 rounded-4" src="/assets/images/banner/lily-banse.jpg" alt="subscribe"></img>
                    </div>
                </div>
            </div>


        </>
    );
}

export default NewsletterSubscribe;