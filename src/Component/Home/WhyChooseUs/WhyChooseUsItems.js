import React from 'react';

const WhyChooseUsItems = ({ data }) => {
    return (

        <div className="col-md-4 col-sm-6 col-12 mb-5 margin-auto">
            <div className="col p-1 ">
                <div className="card h-100 text-center mt-4 choose-item mb-1">
                    <div className="total-data mt-5 mb-5">
                        <img src={data.img} className="chooseImg mb-5" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyChooseUsItems;