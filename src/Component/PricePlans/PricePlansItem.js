import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PricePlansItem = ({data,handlePayment}) => {
    return (
        <div className="col-md-4 col-sm-6 col-6 mt-5">
            <div className={`${data.photoClassName} pt-5 pb-5`}>
            <div className="text-center">
            <p className="text-warning">BUILD MONTHLY</p>
            <h3 className="text-white">{data.plan}</h3>
            <p className="text-warning h1 mt-3">${data.price}</p>
            </div>
            <div className="text-white mt-3 mid-center">
            <p><FontAwesomeIcon icon={faCheck} /><span className="ms-2">{data.title1}</span></p>
            <p><FontAwesomeIcon icon={faCheck} /><span className="ms-2">{data.title2}</span></p>
            <p><FontAwesomeIcon icon={faCheck} /><span className="ms-2">{data.title3}</span></p>
            <p><FontAwesomeIcon icon={faCheck} /><span className="ms-2">{data.title4}</span></p>
            </div>
            <div className="text-center">
                <button className="plans-btn btn-warning" onClick={()=>handlePayment(data.plan)}>PURCHASE</button>
            </div>
            </div>
        </div>
    );
};

export default PricePlansItem;