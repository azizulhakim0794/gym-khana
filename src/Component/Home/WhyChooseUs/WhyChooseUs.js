import React from 'react';
import './WhyChooseUs.css'
import fitness from '../../../Image-&-Icon/Group 87.png'
import cycle from '../../../Image-&-Icon/Group 88.png'
import gift from '../../../Image-&-Icon/gift-2.png'
import WhyChooseUsItems from './WhyChooseUsItems';
const chooseData =[
    {
        id: '01',
        name: 'FREE FITNESS TRAINING',
        details:" Lorem ipsum dolor  inventore, deleniti possimus laboriosam eligendi rerum.",
        img:fitness
    },
    {
        id: '02',
        name: 'TONS OF CARDIO & STRENGTH',
        details:" Lorem ipsum dolor  inventore, deleniti possimus laboriosam eligendi rerum.",
        img:cycle
    },
    {
        id: '03',
        name: 'NO COMMITMENT MEMBERSHIP',
        details:" Lorem ipsum dolor  inventore, deleniti possimus laboriosam eligendi rerum.",
        img:gift
    },
]

const WhyChooseUs = () => {
    return (
        <div className="container margin-auto top-margin">
            <p className="text-center h1 mb-4"><span className="text-warning">WHY </span>CHOOSE US</p>
            <div className="d-flex justify-items-center ">
                <div className="row">

                    {
                        chooseData.map(data => <WhyChooseUsItems data={data} key={data.id} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;