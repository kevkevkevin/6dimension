import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
            <div className="tp-contact-map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d463.86928618429766!2d39.133625730433074!3d21.548642594383765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c5758ae231dd%3A0x7a1bb4851e31878b!2sMansour%20Holding%20Group!5e0!3m2!1sen!2ssa!4v1708954038544!5m2!1sen!2ssa" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
            </div>
         </div>
        </>
    );
};

export default GoogleMap;