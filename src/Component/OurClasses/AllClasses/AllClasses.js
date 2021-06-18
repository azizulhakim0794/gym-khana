import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import HomeFooter from '../../CommonComponent/HomeFooter/HomeFooter';
import WhiteNav from '../../CommonComponent/WhiteNav/WhiteNav';
import './AllClasses.css'
import rightSymbol from '../../../Image-&-Icon/checkmark-square-2.png'
import Loading from '../../CommonComponent/Loading/Loading';
const AllClasses = () => {
    let { id } = useParams();
    const history = useHistory()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://damp-meadow-37150.herokuapp.com/ourClass', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ id: id }),
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id])
    const handlePricePlan = () => {
        history.push('/pricePlans')
    }
    return (
        <div>
            {data.training ?<>
            <div className="main-bg-classes">
                <div className="container text-white">
                    <WhiteNav />
                    <p className="margin-auto text-center h1">
                        {data.training}
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="margin-auto">
                    <div className="top-margin row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <img src={data.image} className="h-400" alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12 col-12 margin-auto row">
                            <div className="col-md-6 col-sm-6 col-6 row margin-auto">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div>
                                        <h3>Monday</h3>
                                        <p className="text-warning width108">6:AM - 10:AM</p>
                                    </div>
                                    <br /><br />
                                    <div>
                                        <h3>Saturday</h3>
                                        <p className="text-warning width108">11:AM - 3:PM</p>
                                    </div>
                                    <br /><br />
                                    <div className="my mr-5">
                                        <h3 >Wednesday</h3>
                                        <p className="text-warning width108">8:AM - 12:PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6 row margin-auto">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div>
                                        <h3>Sunday</h3>
                                        <p className="text-warning width108">9:AM - 12:PM</p>
                                    </div>
                                    <br />
                                    <br />
                                    <div>
                                        <h3>Tuesday</h3>
                                        <p className="text-warning width108">7:AM - 11:AM</p>
                                    </div>
                                    <br />
                                    <br />
                                    <div>
                                        <h3>Thursday</h3>
                                        <p className="text-warning width108">10:AM - 1:AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="col-md-6">
                        <p>{data.details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero autem architecto animi, nostrum magni facere voluptatem quia blanditiis, laboriosam voluptate praesentium eum quaerat harum ratione nisi provident aliquam? Cupiditate.</p></div><br />
                    <div>
                        <img src={rightSymbol} className="check-mark" alt="" /><span className="ms-2">Having Slimmer Shapely Things</span><br /><br />
                        <img src={rightSymbol} className="check-mark" alt="" /><span className="ms-2">Getting Strong Body</span><br /><br />
                        <img src={rightSymbol} className="check-mark" alt="" /><span className="ms-2">Increased Metabolism</span><br /><br />
                        <img src={rightSymbol} className="check-mark" alt="" /><span className="ms-2">Increased Muscular Endurance</span><br /><br />
                        <img src={rightSymbol} className="check-mark" alt="" /><span className="ms-2">Maximum Result in less Time</span><br /><br />
                        <img src={rightSymbol} className="check-mark" alt="" /><span className="ms-2">Firm Hips and Tommy</span>
                    </div>
                </div>
                <div className="d-flex justify-content-end mr-5">
                    <button className="plans-btn btn-warning" onClick={handlePricePlan}>JOIN US</button>
                </div>
            </div>
            <HomeFooter />
            </>:<Loading/>}
        </div>
    );
};

export default AllClasses;