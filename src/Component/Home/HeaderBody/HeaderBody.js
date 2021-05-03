import React from 'react';
import './HeaderBody.css'
import progression1 from '../../../Image-&-Icon/Group 80.png';
import workOut1 from '../../../Image-&-Icon/Group 81.png';
import nutrition1 from '../../../Image-&-Icon/Group 82.png';
import progression from '../../../Image-&-Icon/victor-freitas-546919-unsplash.png';
import workOut from '../../../Image-&-Icon/victor-freitas-604838-unsplash.png';
import nutrition from '../../../Image-&-Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';
import HeaderBodyItem from './HeaderBodyItem';


const bodyItems = [
    {
        id: '01',
        work: "PROGRESSION",
        img: progression1,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        backgroundImage: progression,
        text: 'text-white'
    },
    {
        id: '02',
        work: "WORKOUT",
        img: workOut1,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        backgroundImage: workOut,
        text: 'text-warning'
    },
    {
        id: '03',
        work: "NUTRITION",
        img: nutrition1,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        backgroundImage: nutrition,
        text: 'text-white'
    },
]
const HeaderBody = () => {

    return (
        <div className="container margin-auto">
            <div className="d-flex justify-items-center top-margin">
                <div className="row">

                    {
                        bodyItems.map(data => <HeaderBodyItem data={data} key={data.id} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default HeaderBody;