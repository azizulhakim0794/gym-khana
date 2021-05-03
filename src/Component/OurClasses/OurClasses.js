import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import HomeFooter from '../CommonComponent/HomeFooter/HomeFooter';
import WhiteNav from '../CommonComponent/WhiteNav/WhiteNav';
import './OurClasses.css'
import OurClassesItem from './OurClassesItem';

const OurClasses = () => {
    const [data, setData] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch('https://damp-meadow-37150.herokuapp.com/trainingItem', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    const handleExercise =(e)=>{
        history.push(`/ourClass/${e}`)
    }
    return (
        <div>
            <div className="main-bg-classes">
                <div className="container text-white">
                    <WhiteNav />
                    <p className="margin-auto text-center h1">
                        OUR CLASSES
                    </p>
                </div>
            </div>
            <div className="container ">
                <div className="d-flex justify-content-center ">
                    <div className=" row top-margin">
                    {
                    data.map(data => <OurClassesItem data={data} key={data._id} handleExercise={handleExercise}/>)
                }
                    </div>
                </div>
            </div>
            <HomeFooter/>
        </div>
    );
};

export default OurClasses;