import React from 'react';
 
// const bodyImgStyle = {
//     background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.582) ), url(`${}`);
// }
const HeaderBodyItem = ({ data }) => {
    
    return (
        <div className="col-md-3 col-sm-6 col-12 mb-5 margin-auto" style={{background:`url(${data.backgroundImage})20% 0% `,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
            <div className=" text-center m-4">
                <div className="">
                    <div className= {`${data.text}`}>
                        <img className="mt-5 body-card-img mb-5" src={data.img} alt="" />
                        <p className="h2">{data.work}</p>
                        <p className="card-text">{data.details}</p>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default HeaderBodyItem;