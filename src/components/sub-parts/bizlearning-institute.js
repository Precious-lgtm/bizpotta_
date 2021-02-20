import React from 'react';
import Header from '../page-parts/header';
import Footer from '../page-parts/footer';
import '../../css/resources/tertiary/bizlearning.css';
import image1 from '../../images/domain-skill.jpg';
import image2 from '../../images/vocational-education.png';
import { Link } from 'react-router-dom';

function Bizlearning() {
    return(
        <div>
            <Header />
            <div className = 'biz-header'>
                <h1> Bizlearning Institute </h1>
                <h4>
                    Our bank of educational resources that takes your business
                    potential to the next level - bringing you closer 
                    to fulfillment each step of the way.
                </h4>
            </div>
            <div className = 'biz-item'>
                <div className = 'biz-detail'>
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
                </div>  
                <div className = 'biz-desc'>
                    <img src = {image1} alt = 'choice' />
                </div>
            </div>
            <div className = 'biz-programs' >
                <h1> Bizlearning Programs </h1>
                <div className = 'biz-education'>
                    <div className = 'biz-voc-ed'>
                        <h2> Vocational Learning </h2>
                        <p>
                            Bizpotta gives you access to an array of 
                            resources designed to take your career and 
                            vocational training to the next level. 
                            Equip yourself to find your place in the 
                            world through the Bizpotta Vocational Education 
                            Platform. We offer you world class learning 
                            from global systems, equipping you for the 21st 
                            century market place. Our support tools help you 
                            navigate your learning pathway successfully 
                            through this exciting learning experience. 
                        </p>
                        <p>
                            Begin your skill acquisition journey with a wide 
                            array of resources and increase your value in the 
                            marketplace. Learn from best globally and get 
                            certifications that can compete anywhere in the world. 
                            We are your window to highly-on-demand 21st century 
                            skills needed multinationals around the world. Here, we 
                            give you the global advantage.
                        </p>
                        <p>
                            <strong> Available Course: </strong>
                        </p>
                        <p> <strong> Partners: </strong> City and Guild London, Wiziq. </p>
                    </div>
                    <div>
                        <img src = {image2} alt = "voc-ed" />
                    </div>
                </div>
                <div className = 'biz-education'>
                    <div>
                        <img src = {image2} alt = "cert-ed" />
                    </div>
                    <div className = 'biz-cert-ed'>
                        <h2 style = {{'text-align': 'right'}}> Bizpotta Certification Program </h2>
                        <p>
                            Building a profitable and sustainable business 
                            requires an understanding of the various components 
                            your business must possess in order to achieve its objectives. 
                            Our BCP gives you access to soft skills and hard skills 
                            needed to make smarter business decisions. Learn how to 
                            create structures for your business, skyrocket your sales 
                            and acquire the leadership competencies critical for driving 
                            team success. Our BCP is like to a pocket-sized MBA programme 
                            that hones your business skills, gives you the competitive 
                            advantage through strategic thinking and gives you the 
                            self-discipline to achieve your business goals. 
                        </p>
                        <p>
                            <strong> Partners: </strong> Tekedia Mini MBA
                        </p>
                        <p> (BCP is a self-paced programme that participants will pay 
                            100,000 naira in order to access all benefits).   
                        </p>
                        <Link to = "/resource/bizcert"> See a full list and detail of our Courses </Link>
                    </div>
                </div>
                <div className = 'biz-education'>
                    <div className = 'biz-incu-ed'>
                        <h2> Bizpotta Incubation Program </h2>
                        <p>
                            This bespoke programme is designed for entrepreneurs who are 
                            working on a Start ups or looking to give life to ambitious new 
                            ideas. BIP is a highly competitive programme designed to help 
                            early stage start ups position and scale for success. Entrepreneurs 
                            who pass through BIP receive access to close mentorship and monitoring 
                            that gives their businesses the needed structures needed to build 
                            profitable businesses. The programme prepares participants to become 
                            successful in business through an immersive learning system. 
                        </p>
                        <p> 
                            (BIP is a three month Incubation programme that participants will 
                            pay 200,000 naira in order to access all benefits)     
                        </p>
                    </div>
                    <div>
                        <img src = {image2} alt = "voc-ed" />
                    </div>
                </div>
                <div className = 'biz-education'>
                    <div>
                        <img src = {image2} alt = "cert-ed" />
                    </div>
                    <div className = 'biz-master-ed'>
                        <h2 style = {{'text-align': 'right'}}> Bizpotta Masterclass </h2>
                        <p>
                            Connect with established entrepreneurs with results to show 
                            in their business journey and draw from their fountain of 
                            experience. You don’t have the time to make all the business 
                            mistakes before finding out what works. Our Masterclass gives 
                            you the experience-advantage and helps you accelerate your 
                            business growth. This programme is especially beneficial to 
                            experienced entrepreneurs looking to advance their results, 
                            build high net-worth associations and broaden their perspective 
                            on business sustainability and profitability.  
                        </p>
                        <p>
                            (People will have to subscribe with 20,000 naira monthly to gain 
                            access to all Bizpotta Masterclass resources.)  
                        </p>
                        <Link to = "/"> Meet our Masterclass Tutors </Link>
                        <Link to = "/signup"> Signup </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Bizlearning;