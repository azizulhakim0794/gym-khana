import React from 'react';
import HomeFooter from '../CommonComponent/HomeFooter/HomeFooter';
import Loading from '../CommonComponent/Loading/Loading';
import Header from './Header/Header';
import HeaderBody from './HeaderBody/HeaderBody';
import './Home.css'
import HomeMidOne from './HomeMidOne/HomeMidOne';
import HomeTraining from './HomeTraining/HomeTraining';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
           {<HeaderBody/> ? <>
            <Header/>
            <HeaderBody/>
            <HomeMidOne/>
            <HomeTraining/>
            <WhyChooseUs/>
            <HomeFooter/>
           </>
            : <Loading/>}
        </div>
    );
};

export default Home;