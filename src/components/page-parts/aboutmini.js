import React from 'react';
import '../../css/frontpage/aboutmini.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function Aboutmini() {
    return(
        <div className = 'about-basic'>
            <div className = 'about-details'>
                <h2> Why Choose Us? </h2>
                <h5>The first Integrated Online Business Solutions Portal</h5>
            </div>
            <div className = 'about-reasons'>
                <div>
                    <h6><i className = 'fa fa-handshake-o'></i></h6>
                    <h5> Trust </h5>
                    <p> We maintain fidelity, we keep our word as much as possible </p>
                </div>
                <div>
                    <h6><i className = 'fa fa-cogs'></i></h6>
                    <h5> Innovation </h5>
                    <p> We make it a priority to implement better and faster methods of improving businesses </p>
                </div>
                <div>
                    <h6><i className = 'fa fa-trophy'></i></h6>
                    <h5> Excellence </h5>
                    <p> We have improved so many businessmen and businesses over the years, and our records
                        speak for us </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutmini;