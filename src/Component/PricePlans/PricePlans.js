import React from 'react';
import HomeFooter from '../CommonComponent/HomeFooter/HomeFooter';
import WhiteNav from '../CommonComponent/WhiteNav/WhiteNav';
import PricePlansItem from './PricePlansItem';
import './PricePlans.css'
import { useHistory } from 'react-router';
import Loading from '../CommonComponent/Loading/Loading';
// import { UserContext } from '../../App';
const plans = [
    {
        id: '01',
        plan: 'ADVANCE PLAN',
        price: 140,
        title1: "Best Trainer",
        title2: "Best Instrument",
        title3: "Best Training",
        title4: "Best Body",
        photoClassName:"Photo1",
    },
    {
        id: '02',
        plan: 'BASIC PLAN',
        price: 120,
        title1: "Best Trainer",
        title2: "Best Instrument",
        title3: "Good Training",
        title4: "Best Body",
        photoClassName:"Photo2",
    },
    {
        id: '03',
        plan: 'BEGINNERS PLAN',
        price: 90,
        title1: "Good Trainer",
        title2: "Best Instrument",
        title3: "Best Training",
        title4: "Good Body",
        photoClassName:"Photo3",
    }
]
const PricePlans = () => {
    const history = useHistory()
    // const [userData, setUserData] = useContext(UserContext)

    const handlePayment= (e)=>{
        history.push("/personalInfo/"+e)
        // console.log(e)
    }
    return (
        <div>
            <div className="main-bg-classes">
                <div className="container text-white">
                    <WhiteNav />
                    <p className="margin-auto text-center h1">
                        PRICING PLANS
                    </p>
                </div>
            </div>
            <div className="container ">
                <div className="mt-5">
                    <h1 className="text-center"><span className="text-warning">CHOOSE THE OFFER </span>THAT SUITS YOU</h1><br />
                    <p className="text-center text-secondary">
                        Lorem ipsum dolor, sit amet consectetur voluptas architecto sit est porro repellat, deserunt in aut, perspiciatis dicta beatae labore eligendi magni distinctio, debitis autem dolorem veritatis?
                </p>
                </div>
            </div>
            <div className="container ">
                   {plans.length ? <div className=" row top-margin margin-auto">
                        {
                            plans.map(data => <PricePlansItem data={data} handlePayment={handlePayment} key={data.id} />)
                        }
                    </div> : <Loading/>}
            </div>
            <HomeFooter />
        </div>
    );
};

export default PricePlans;