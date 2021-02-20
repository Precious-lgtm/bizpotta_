import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/frontpage/features.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image2 from '../../images/education-black.jpg';
import image4 from '../../images/bizpotta-about.jpeg';
import image6 from '../../images/bizpotta-hub.jpeg';
import image7 from '../../images/business-tech.jpeg';
import image8 from '../../images/business-learning.jpg';

const handleDragStart = (e) => e.preventDefault();

const items = [
        <div className = 'testimony' onDragStart={handleDragStart} >
            <img src = {image2} alt = 'test1'/>
            <div className = 'test-content'>
                <p><i className = 'fa fa-quote-left'></i></p>
                <p className = 'text'>
                    Back in 2017, I was struggling to 
                    start a business - I ran into an Ad by Bizpotta and 
                    decided to pay them a visit. 3+ years after, and 
                    I can say that my experience has been fruitful. I own
                    a business worth millions of dollars and I really feel 
                    I am living the dream. Highly Recommend!!
                </p>
                <h4> Andy Robertson at Andela </h4>
            </div>
        </div>,
        <div className = 'testimony1' onDragStart={handleDragStart} >
            <img src = {image4} alt = 'test2'/>
            <div className = 'test-content'>
                <p><i className = 'fa fa-quote-left'></i></p>
                <p className = 'text'>
                    Back in 2017, I was struggling to 
                    start a business - I ran into an Ad by Bizpotta and 
                    decided to pay them a visit. 3+ years after, and 
                    I can say that my experience has been fruitful. I own
                    a business worth millions of dollars and I really feel 
                    I am living the dream. Highly Recommend!!
                </p>
                <h4> Andy Robertson at Andela </h4>
            </div>
        </div>,
        <div className = 'testimony2' onDragStart={handleDragStart} >
            <img src = {image8} alt = 'test3'/>
            <div className = 'test-content' >
                <p><i className = 'fa fa-quote-left'></i></p>
                <p className = 'text'>
                    Back in 2017, I was struggling to 
                    start a business - I ran into an Ad by Bizpotta and 
                    decided to pay them a visit. 3+ years after, and 
                    I can say that my experience has been fruitful. I own
                    a business worth millions of dollars and I really feel 
                    I am living the dream. Highly Recommend!!
                </p>
                <h4> Andy Robertson at Andela </h4>
            </div>
        </div>
    ];

function Features() {
    return(
        <div className = 'feature-container'>
                <div className = 'feature-basic' style = {{'backgroundColor': '#f8f9fa'}}>
                    <div className = 'feature-details' style = {{'paddingLeft': '15vh'}}>
                        <h5>About Us</h5>
                        <h2> Scratch, Build and Play Together </h2>
                        <p>
                            Offers the following: First online vocational education, 
                            Bizpotter masterclass for business executives and a bespoke 
                            Bizpotter certificate programme for budding startups.
                        </p>
                        <Link to = "/about"> Learn More </Link>
                    </div>
                    <div className = 'intro-image' style = {{'margin-right': '25vh'}}>
                        <img src = {image4} alt = 'intro' />
                    </div>    
                </div>
                <div className = 'feature-basic' style = {{'backgroundColor': '#f8f9fa'}}>
                    <div className = 'intro-image'>
                        <img src = {image6} alt = 'intro' />
                    </div>
                    <div className = 'feature-details'>
                        <h5> Bizpotta Hub </h5>
                        <h2> Upgrade your Business Management Strategy </h2>
                        <p>
                            Bizpotta Hub is your business management resource 
                            centre that simplifies business development and 
                            management processes and helps you achieve sustainable 
                            profitability. The Bizpotta Hub helps businesses manage 
                            critical aspects like business registration, business 
                            plan creation, legal documentation, Sales and Marketing, 
                            Accounting, Remittances and customer management issues.
                        </p>
                        <Link to = "/"> Learn More </Link>
                    </div>
                </div>
                <div className = 'feature-basic' style = {{'backgroundColor': '#cdd1d4'}}>
                    <div className = 'feature-details' style = {{'paddingLeft': '15vh'}}>
                        <h5> Bizpotta Learning</h5>
                        <h2> Learn from the Best </h2>
                        <p>
                            Get quick access to learning resources, 
                            your dashboard, mentors and all benefits 
                            BizPotta provides all in one place.
                        </p>
                        <Link to = " "> Learn More </Link>
                    </div>
                    <div className = 'intro-image'>
                        <img src = {image2} alt = 'intro' style = {{'margin-right': '25vh'}}/>
                    </div>
                </div>
                <div className = 'course-div'>
                    <h2> Free Courses for You! </h2>
                    <h4> Sign up and access these premium courses for free </h4>    
                    <div className = 'courses'>
                        <div className = 'course-list'>
                            <img src = {image4} alt = 'vid' />
                            <h5> Understanding Sales and Marketing </h5>
                            <p> This course is designed to help participants 
                                improve their revenue by paying attention to 
                                their sales and marketing strategies.
                            </p>
                        </div>
                        <div className = 'course-list'>
                            <img src = {image4} alt = 'vid' />
                            <h5> Understanding Sales and Marketing </h5>
                            <p> This course is designed to help participants 
                                improve their revenue by paying attention to 
                                their sales and marketing strategies.
                            </p>
                        </div>
                        <div className = 'course-list'>
                            <img src = {image4} alt = 'vid' />
                            <h5> Understanding Sales and Marketing </h5>
                            <p> This course is designed to help participants 
                                improve their revenue by paying attention to 
                                their sales and marketing strategies.
                            </p>
                        </div>
                        <div className = 'course-list'>
                            <img src = {image4} alt = 'vid' />
                            <h5> Understanding Sales and Marketing </h5>
                            <p> This course is designed to help participants 
                                improve their revenue by paying attention to 
                                their sales and marketing strategies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className = 'review'>
                    <h2> What they say about Us!</h2>
                    <h4> We have built thousands of businesses for our clients and these are some of our reviews </h4>
                    <AliceCarousel mouseTracking items={items} disableButtonsControls = {true} responsive = {3} infinite = {true} />
                </div>
                <div className = 'join'>
                    <div>
                        <Link to = "/signup"> Join Our Community Now</Link>
                    </div>
                </div>
        </div>
    );
}

export default Features;