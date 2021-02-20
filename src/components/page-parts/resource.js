import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/resources/resource.css';
import image1 from '../../images/bizpotta-learning-img.png';
import image2 from '../../images/bizpotta-community-img.png';
import image3 from '../../images/bizpotta-funds-img.png';

function Resource() {
    return(
        <div className = 'res-main'>
            <div className = 'res-header'>
                <h1> Our Resources </h1>
                <h4> Take a detailed view of the services 
                    we provide, the prospects, the cost effectiveness and 
                    what you can do to be a beneficiary.
                </h4>
            </div>
            <div className = 'res-item'>
                <div className = 'item-detail'>
                    <h1>Bizpotta Learning Institute </h1>
                    <p>
                        The Bizpotta Learning Institute is a massive business and vocational 
                        education platform designed to help entrepreneurs advance their learning 
                        and master their craft. The power of education in the profitability and 
                        sustainability of businesses makes the Bizpotta Learning Centre the engine 
                        room of knowledge for entrepreneurs. No matter your field in business, 
                        Bizpotta Learning has something interesting for you. Through our hands-on 
                        learning approaches, participants who pass through the Bizpotta Learning 
                        Institute are equipped with the requisite skills needed to build profitable businesses. 
                        The BLI is your one-stop-shop platform for building knowledgeable entrepreneurs.
                    </p>
                    <Link to = '/resource/bizlearning'> Start Your Learning Journey Here </Link>
                </div>  
                <div className = 'item-desc'>
                    <img src = {image1} alt = 'choice' />
                </div>
            </div>
            <div className = 'res-item'>
                <div className = 'item-desc'>
                    <img src = {image1} alt = 'choice' />
                </div>
                <div className = 'item-detail'>
                    <h1>Bizpotta Hub </h1>
                    <p>
                        Bizpotta Hub is your business management resource 
                        centre that simplifies business development and management 
                        processes and helps you achieve sustainable profitability. 
                        The Bizpotta Hub helps businesses manage critical aspects 
                        like business registration, business plan creation, legal 
                        documentation, Sales and Marketing, Accounting, Remittances and 
                        customer management issues. Our partnership with individuals and 
                        organizations ensure that you get the best business support from 
                        our platform. At Bizpotta Hub, we provide you with the resources 
                        and strategy needed to register, develop and manage your business 
                        to a point of profitability.
                    </p>
                    <p>
                        Whether you’re a small business, startup or an established business, 
                        our Bizpotta Hub gives you the help you need to develop and manage your 
                        business so you can focus on the more important part of developing 
                        winning strategies for your business. 
                    </p>
                    <Link> See the Full Package </Link>
                </div>  
            </div>
            <div className = 'res-item'>
                <div className = 'item-detail'>
                    <h1>Bizpotta Community </h1>
                    <p>
                        The Bizpotta Community is the perfect online 
                        business marketplace and networking hub for 
                        business to business and business to client 
                        connections. Gain access to quality partnerships and 
                        collaborations, gain visibility and explore new markets 
                        with our community of entrepreneurs. At Bizpotta, 
                        businesses and individuals network, advertize their 
                        products and services to other businesses and individuals 
                        at a subsidized cost.
                    </p>
                    <Link> Join the Community </Link>
                </div>  
                <div className = 'item-desc'>
                    <img src = {image2} alt = 'choice' />
                </div>
            </div>
            <div className = 'res-item'>
                <div className = 'item-desc'>
                    <img src = {image3} alt = 'choice' />
                </div>
                <div className = 'item-detail'>
                    <h1>Bizpotta Funds </h1>
                    <p>
                        We know you’re working hard to accomplish 
                        your business goals. We can see the effort 
                        you put in everyday but a time comes when 
                        lack of funds stands between you and the next 
                        stage of your business journey. We are here 
                        to help you. Don’t let funds stop your business 
                        growth again!
                    </p>
                    <p>
                        Our funds in Bizpotta make it possible for businesses 
                        to expand and reach a larger customer base. If you’re 
                        looking for a loan or grant, or you’re looking to 
                        speak to angel investors or venture capitalists about 
                        your business, we have various kinds of funding opportunities 
                        to help you make progress.  Once you’re willing to put in 
                        the work, we are here to help you a successful business. 
                    </p>
                    <Link> Access these Funds </Link>
                </div>  
            </div>
        </div>
    )
}

export default Resource;